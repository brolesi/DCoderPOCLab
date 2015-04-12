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
    public class PeopleAPIHelper
    {
        private static RestClient restCliProdBrain;

        static PeopleAPIHelper()
        {
            restCliProdBrain = new RestClient(APIConstants.GetPRDBrainTenantBaseUri());
        }

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

        public static Person createPerson(Person person)
        {
            string apiSpecificPath = "people/v2/people";

            var request = CreateRestRequest(apiSpecificPath, Method.PUT);
            request.AddJsonBody(person);
            var response = restCliProdBrain.Put(request);

            Console.WriteLine("Create person response:");
            Console.WriteLine(">> Status = " + response.StatusCode);
            Console.WriteLine(">> Object = " + response.Content);

            return person;
        }

        public static Profile createProfile(Profile profile)
        {
            String apiSpecificPath = "people/v2/profiles";

            var request = CreateRestRequest(apiSpecificPath, Method.PUT);
            request.AddJsonBody(profile);
            var response = restCliProdBrain.Put(request);

            Console.WriteLine("Create profile response:");
            Console.WriteLine(">> Status = " + response.StatusCode);
            Console.WriteLine(">> Object = " + response.Content);

            return profile;
        }

        public static void addRoleToProfile(Profile profile, string roleName)
        {
            //creates the builder
            String apiSpecificPath = "people/v2/profiles/" + profile.id.ToString() + "/addrole/" + roleName;


            var request = CreateRestRequest(apiSpecificPath, Method.PUT);
            request.AddJsonBody(profile);
            var response = restCliProdBrain.Put(request);

            Console.WriteLine("Add role " + roleName + " to profile " + profile.id.ToString() + ":");
            Console.WriteLine(">> Status = " + response.StatusCode);
            Console.WriteLine(">> Object = " + response.Content);
        }
    }
}