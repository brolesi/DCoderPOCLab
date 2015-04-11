using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DCoderLab.ConsoleApp.Connectors.Data
{
    public class LocationData
    {
        public string Description { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }

        public static LocationData New(string description, string latitude, string longitude)
        {
            return new LocationData()
            {
                Description = description,
                Latitude = latitude,
                Longitude = longitude
            };
        }
    }
}
