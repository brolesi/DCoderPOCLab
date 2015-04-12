using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCoderLab.Core.Model
{
    public class Profile
    {
        public long id { get; set; }
        public string providerId { get; set; }
        public string providerUserId { get; set; }
        public string email { get; set; }
        public string username { get; set; }
        public string profileURL { get; set; }
        public string coverURL { get; set; }
        public string imageURL { get; set; }
        public string displayName { get; set; }
        public string tagLine { get; set; }
        public string introduction { get; set; }
        public string braggingRights { get; set; }
        public string employerName { get; set; }
        public string jobTitle { get; set; }
        public string locale { get; set; }
        public string gender { get; set; }
        public string maritalStatus { get; set; }
        public DateTime birthdate { get; set; }
        public string position { get; set; }
        public string manager { get; set; }
        public string coach { get; set; }
        public long personId { get; set; }
        public DateTime lastUpdated { get; set; }
        public int securityLevel { get; set; }

        public Profile()
        {
            securityLevel = 0;
        }
    }
}
