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
    public class CardAPIHelper
    {
        private static RestClient restCliProdBrain;
        private static RestClient restCliSC2;
        private static RestClient restProdSC2;

        static CardAPIHelper()
        {
            restCliProdBrain = new RestClient(APIConstants.GetPRDBrainTenantBaseUri());
        }

        //region Card

        public static String GetCards(String query)
        {
            //https://d1-prd.appspot.com/brain/ciandt-i/card/v3/cards?locale=pt-BR&q=

            //String parameters = "?locale=pt-BR" + "&q=" + Uri.encode(query.toLowerCase(new Locale("pt", "BR")));
            //String url = APIConstants.URL_D1_PROD_BRAIN + APIConstants.PATH_D1_PROD_INTRANET_CARDS + parameters;

            var request = CreateRestRequest("card/v3/cards?locale=pt-BR&q=" + query.ToLower(CultureInfo.GetCultureInfo("pt-BR")), Method.GET);

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

        public static void SendCard(Card card)
        {
            var request = CreateRestRequest("card/v2/cards", Method.PUT);
            request.AddJsonBody(card);
            var response = restCliProdBrain.Put(request);

            Console.WriteLine("Create card response:");
            Console.WriteLine(">> Status = " + response.StatusCode);
            Console.WriteLine(">> Object = " + response.Content);
        }

        public static String SearchCards(String query, String localeCode, long? personId)
        {

            String apiSpecificPath = "h/brain/card/v3/cards?q=" + query;
  
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
