using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCoderLab.Core.API
{
    public class APIConstants
    {
        public const string URL_D1_PROD_BRAIN = "https://d1-prd.appspot.com/brain";
        public const string PATH_D1_PROD_INTRANET_CARDS = "/ciandt-i/card/v3/cards";
        public const string PATH_D1_PROD_CIANDT_CARDS = "/ciandt.com/card/v3/cards";

        public const string URL_D1_DEV_SC2 = "https://d1-dev.appspot.com/sc2";
        public const string PATH_D1_DEV_INTRANET_CARDS = "/h/brain/card/v3/cards";
        public const string PATH_D1_DEV_CIANDT_CARDS = "/h/brain/card/v3/cards";

        public const string URL_D1_PRD_SC2 = "https://d1-prd.appspot.com/sc2"; 

        /* CLIENT ID & CLIENT API KEYS */
        private static string _clientID = "1";
        private static string _apiKey = "cf812f3722f0ff885501330df71396e2d08baacb87cc7c8a6f311b1ddd928915";
        private static string _personID = "4533868430360576";
        private static string _tenantID = "d-coder";

        /*CLIENT ID*/
        public static void SetClientID(string clientID)
        {
            _clientID = clientID;
        }
        public static string GetClientID()
        {
            return _clientID;
        }

        /*API KEY*/
        public static void SetAPIKey(string apiKey)
        {
            _apiKey = apiKey;
        }
        public static string GetAPIKey()
        {
            return _apiKey;
        }

        /*PERSON ID*/
        public static string GetPersonID()
        {
            return _personID;
        }
        public static void SetPersonID(string _personID)
        {
            APIConstants._personID = _personID;
        }

        /*TENANT ID*/
        public static string GetTenantID()
        {
            return _tenantID;
        }

        public static void SetTenantID(string _tenantID)
        {
            APIConstants._tenantID = _tenantID;
        }

        public static string GetPRDBrainTenantBaseUri()
        {
            return string.Format("{0}/{1}", URL_D1_PROD_BRAIN, GetTenantID());
        }
    }
}
