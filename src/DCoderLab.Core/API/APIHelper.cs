using DCoderLab.Core.Model;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCoderLab.Core.API
{
    public class APIHelper
    {
        private static RestClient restCliProdBrain;
        private static RestClient restCliSC2;
        private static RestClient restProdSC2;

        static APIHelper()
        {
            restCliProdBrain = new RestClient(APIConstants.URL_D1_PROD_BRAIN);
            restCliSC2 = new RestClient(APIConstants.URL_D1_DEV_SC2);
            restProdSC2 = new RestClient(APIConstants.URL_D1_PRD_SC2);
        }

        //region Card

        public static String GetCards(String query)
        {
            //https://d1-prd.appspot.com/brain/ciandt-i/card/v3/cards?locale=pt-BR&q=

            //String parameters = "?locale=pt-BR" + "&q=" + Uri.encode(query.toLowerCase(new Locale("pt", "BR")));
            //String url = APIConstants.URL_D1_PROD_BRAIN + APIConstants.PATH_D1_PROD_INTRANET_CARDS + parameters;

            var request = CreateRestRequest(APIConstants.GetTenantID() + "/card/v3/cards?locale=pt-BR&q=" + query.ToLower(CultureInfo.GetCultureInfo("pt-BR")), Method.GET);

            var response = restCliProdBrain.Get(request);

            var json = response.Content;

            return json;
        }

        //TODO Retornando erro de SSLProtocol
        //public static String GetCardContent(String mnemonic)
        //{
        //    //https://d1-dev.appspot.com/sc2/{tenant_id}/h/brain/card/v3/cards/{mnemonic}

        //    String url = "https://d1-dev.appspot.com/sc2/" + APIConstants.GetTenantID() + "/h/brain/card/v3/cards/" + mnemonic;
        //    String json = WebClient.HttpRequest(url, CreateHeadersArray(), "GET");

        //    return json;
        //}

        ////TODO javax.net.ssl.SSLHandshakeException: Handshake failed
        //public static String addLikeCard(String cardID)
        //{
        //    //https://d1-dev.appspot.com/sc2/{tenant_id}/h/brain/card/v3/cards/{card_id}/like

        //    String url = "https://d1-dev.appspot.com/sc2/" + APIConstants.GetTenantID() + "/h/brain/card/v3/cards/" + cardID + "/like";
        //    String json = WebClient.HttpRequest(url, CreateHeadersArray(), "PUT");

        //    return json;
        //}

        //public static String removeLikeCard(String cardID)
        //{
        //    //https://d1-dev.appspot.com/sc2/{tenant_id}/h/brain/card/v3/cards/{card_id}/like

        //    String url = "https://d1-dev.appspot.com/sc2/" + APIConstants.GetTenantID() + "/h/brain/card/v3/cards/" + cardID + "/like";
        //    String json = WebClient.HttpRequest(url, CreateHeadersArray(), "DELETE");

        //    return json;
        //}

        //public static String addDislikeCard(String cardID)
        //{
        //    //https://d1-dev.appspot.com/sc2/{tenant_id}/h/brain/card/v3/cards/{card_id}/dislike

        //    String url = "https://d1-dev.appspot.com/sc2/" + APIConstants.GetTenantID() + "/h/brain/card/v3/cards/" + cardID + "/dislike";
        //    String json = WebClient.HttpRequest(url, CreateHeadersArray(), "PUT");

        //    return json;
        //}

        //public static String removeDislikeCard(String cardID)
        //{
        //    //https://d1-dev.appspot.com/sc2/{tenant_id}/h/brain/card/v3/cards/{card_id}/dislike

        //    String url = "https://d1-dev.appspot.com/sc2/" + APIConstants.GetTenantID() + "/h/brain/card/v3/cards/" + cardID + "/dislike";

        //    String json = WebClient.HttpRequest(url, CreateHeadersArray(), "DELETE");

        //    return json;
        //}

        //public static String pinCard(String cardID)
        //{
        //    //https://d1-dev.appspot.com/sc2/{tenant_id}/h/brain/card/v3/cards/{card_id}/pin

        //    String url = "https://d1-dev.appspot.com/sc2/" + APIConstants.GetTenantID() + "/h/brain/card/v3/cards/" + cardID + "/pin";
        //    String json = WebClient.HttpRequest(url, CreateHeadersArray(), "PUT");

        //    return json;
        //}

        //public static String unpinCard(String cardID)
        //{
        //    //https://d1-dev.appspot.com/sc2/{tenant_id}/h/brain/card/v3/cards/{card_id}/pin

        //    String url = "https://d1-dev.appspot.com/sc2/" + APIConstants.GetTenantID() + "/h/brain/card/v3/cards/" + cardID + "/pin";
        //    String json = WebClient.HttpRequest(url, CreateHeadersArray(), "DELETE");

        //    return json;
        //}

        //endregion

        public static IRestRequest CreateRestRequest(string uri, Method method)
        {
            var request = new RestRequest(uri, Method.GET);

            FillHeaderRequest(request);

            return request;
        }

        //Não esta sendo usado, ia utilizar para poder passar N parametros mas por enquanto estou usando os headers diretos.
        public static void FillHeaderRequest(IRestRequest restRequest)
        {
            restRequest.AddHeader("CLIENT_ID", APIConstants.GetClientID());
            restRequest.AddHeader("API_KEY", APIConstants.GetAPIKey());
        }



        /**
     * Create a fake card for testing purposes
     */
        public static Card createCardObject(long id, String title, String summary, String content)
        {
            Card card = new Card();

            //Basic info
            card.id = id;
            card.authorDisplayName = "Vinicius";
            card.authorEmail = "patrinhani@ciandt.com";
            card.authorId = 5639445604728832L;
            card.authorImageURL = "https://lh3.googleusercontent.com/-tr003KjHJYk/AAAAAAAAAAI/AAAAAAAAKQ4/4wSwmn3j46c/photo.jpg?sz=50";
            card.isAutoModerated = true;
            card.createdAt = DateTime.Now;
            card.isFeatured = false;
            card.mnemonic = "falcon-force-test";
            card.providerUserId = "118239183782204424177";
            card.updated = null;
            card.expirationDate = null;
            card.publishingDate = null;
            card.securityLevel = 0;
            card.addCategory("falcon-force");
            card.addCategory("d-coder");

            //i18n
            card.addLanguage("pt");
            card.addLanguage("us");
            card.addRegion("BR");
            card.addRegion("US");

            //Content info
            card.title = title;
            card.description = summary;
            card.content = content;
            card.providerContentId = "falcon-force-123";
            card.providerContentURL = "http://danielviveiros.com";
            card.providerId = "TestProviderId";
            card.providerUpdated = DateTime.Now;
            card.providerPublished = DateTime.Now;

            //Community
            //card.setCommunity("Community Test");
            //card.setCommunityDisplayName("Community Display Name Test");

            return card;
        }

        public static void SendCard(Card card)
        {
            var request = CreateRestRequest(APIConstants.GetTenantID() + "/card/v2/cards", Method.PUT);
            request.AddJsonBody(card);
            var response = restCliProdBrain.Put(request);
            if (response.StatusCode == 0)
            {
                //
            }
        }

        public static String SearchCards(String query, String localeCode, long? personId)
        {

            String apiSpecificPath = APIConstants.GetTenantID() + "/h/brain/card/v3/cards?q=" + query;
  
            if (localeCode != null)
            {
                apiSpecificPath += "&locale=" + localeCode;
            }

            if (null != personId)
            {
                apiSpecificPath += "&personId=" + personId;
            }
                
            var request = CreateRestRequest(apiSpecificPath,  Method.GET);
            var response = restProdSC2.Get(request);

            return response.Content;
        }
    }
}
