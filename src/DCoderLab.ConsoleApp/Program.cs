using DCoderLab.ConsoleApp.Connectors;
using DCoderLab.Core.API;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCoderLab.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            //var response = APIHelper.GetCards("");
            //APIHelper.SendCard(APIHelper.createCardObject(98999, "force-falcon-msg", "teste de card falcon force", "msg de conteudo"));
            //APIHelper.SearchCards("falcon-force-teste", "pt-BR", 5639445604728832L);

            startMeetingDashBoardRoomsMapConnector();

            Console.WriteLine("Press ENTER to close...");
            Console.ReadLine();
        }

        private static void startMeetingDashBoardRoomsMapConnector()
        {
            var roomsConnector = new MeetingDashBoardRoomsMapConnector();

            roomsConnector.UpdateMeetingRoomsOnCanvas();
        }
    }
}
