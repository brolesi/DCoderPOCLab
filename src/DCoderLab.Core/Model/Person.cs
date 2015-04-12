using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCoderLab.Core.Model
{
    public class Person
    {
        public long id { get; set; }
        public string displayName { get; set; }
        public string email { get; set; }
        public string position { get; set; }
        public string type { get; set; }
        public string company { get; set; }
        public string locale { get; set; }
        public string gender { get; set; }
        public string maritalStatus { get; set; }
        public DateTime birthdate { get; set; }
        public DateTime lastUpdate { get; set; }
        public bool active { get; set; }

        public Person()
        {
            active = true;
        }
    }
}
