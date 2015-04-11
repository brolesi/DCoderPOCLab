using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCoderLab.ConsoleApp.Connectors.Data
{
    public class MeetingRoomData
    {
        public string MnemonicID
        {
            get
            {
                return string.Format("dcoder-fforce-metroom-{0}", NameId);
            }
        }

        public int Id { get; set; }
        public string NameId { get; set; }
        public string Name { get; set; }
        public LocationData Localization { get; set; }
        public string Resources { get; set; }
        public string Capacity { get; set; }
        public string BranchLine { get; set; }
        public string GoogleCalendarId { get; set; }
    }
}
