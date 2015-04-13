using DCoderLab.ConsoleApp.Connectors.Data;
using DCoderLab.Core.API;
using DCoderLab.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCoderLab.ConsoleApp.Connectors
{
    public class MeetingDashBoardRoomsMapConnector : BaseSmartCanvasConnector
    {
        public MeetingDashBoardRoomsMapConnector()
        {

        }

        public void UpdateMeetingRoomsOnCanvas()
        {
            setupPersonAndProfile();

            var listRoomCards = getMeetingRoomInfo().Select(m => mapRoomDataToCard(m)).ToList();

            foreach (var roomCard in listRoomCards)
            {
                CardAPIHelper.SendCard(roomCard);
            }
        }

        private void setupPersonAndProfile()
        {
            var patrinhaniPerson = getPerson();
            var patrinhaniProfile = getProfile(patrinhaniPerson);

            PeopleAPIHelper.createPerson(patrinhaniPerson);

            PeopleAPIHelper.createProfile(patrinhaniProfile);

            PeopleAPIHelper.addRoleToProfile(patrinhaniProfile, "MODERATOR");
            PeopleAPIHelper.addRoleToProfile(patrinhaniProfile, "PUBLISHER");
        }

        private Card getBaseSmartCanvasCard()
        {
            var baseCard = new Card()
            {
                //id = 0,
                authorDisplayName = "Falcon Force",
                authorEmail = "patrinhani@ciandt.com",
                authorId = 5639445604728832L,
                //authorImageURL = "https://lh3.googleusercontent.com/-tr003KjHJYk/AAAAAAAAAAI/AAAAAAAAKQ4/4wSwmn3j46c/photo.jpg?sz=50",
                isAutoModerated = true,
                createdAt = DateTime.Now,
                isFeatured = false,
                //mnemonic = "falcon-force-test",
                providerUserId = "117476354191473801408",
                //updated = null,
                //expirationDate = null,
                //publishingDate = null,
                securityLevel = 0,
                //addCategory("falcon-force"),
                //addCategory("d-coder"),

                //i18n
                //addLanguage("pt"),
                //addLanguage("us"),
                //addRegion("BR"),
                //addRegion("US"),

                //Content info
                //title = title,
                //description = summary,
                //content = content,
                providerId = "PatrinhaniGooglePlus",
                providerUpdated = DateTime.Now,
                providerPublished = DateTime.Now,
                providerContentId = "PatrinhaniGooglePlus",
                providerContentURL = "http://i.ciandt.com",
            };

            baseCard.addCategory("falcon-force");
            baseCard.addCategory("d-coder");

            //i18n
            baseCard.addLanguage("pt");
            baseCard.addLanguage("us");
            baseCard.addRegion("BR");
            baseCard.addRegion("US");

            return baseCard;
        }

        private Card mapRoomDataToCard(MeetingRoomData roomData)
        {
            var roomCard = getBaseSmartCanvasCard();

            roomCard.id = roomData.Id;
            roomCard.mnemonic = roomData.MnemonicID;
            roomCard.title = string.Format("Mr. {0}", roomData.Name);
            roomCard.geoCode = string.Format("{0}, {1}", roomData.Localization.Latitude, roomData.Localization.Longitude);

            var strBuilderDescription = new StringBuilder();
            roomCard.description = strBuilderDescription.ToString();

            var strBuilderContent = new StringBuilder();
            roomCard.content = strBuilderContent.ToString();

            return roomCard;
        }

        private IList<MeetingRoomData> getMeetingRoomInfo()
        {
            return new List<MeetingRoomData>()
            {
                new MeetingRoomData {
                    Id = 99001,
                    NameId = "cps-timao",
                    Name = "Timão",
                    Localization = LocationData.New("Campinas, 9E", "-22.813596", "-47.044893"),
                    Resources = "Telefone viva-voz",
                    Capacity = "4 pessoas",
                    BranchLine = "6233",
                    GoogleCalendarId = "ciandt.com_sf3k0e598ql53krsija1rqrpo8@group.calendar.google.com"
                },
                new MeetingRoomData {
                    Id = 99002,
                    NameId = "cps-tartarugas-ninja",
                    Name = "Tartarugas Ninja",
                    Localization = LocationData.New("Campinas, 9E", "-22.813587", "-47.044851"),
                    Resources = "Conference calling, white board, split air conditioner",
                    Capacity = "4 pessoas",
                    BranchLine = "1308",
                    GoogleCalendarId = "ciandt.com_baa6knkbnlu8ssqqgsnf0liqr4@group.calendar.google.com"
                },
            };
        }

        private Person getPerson()
        {
            return new Person()
            {
                id = 5511971004256,
                displayName = "Vinicius Patrinhani",
                email = "patrinhani@ciandt.com",
                active = true,
                birthdate = new DateTime(1984, 7, 27),
                company = "CI&T",
                gender = "Male",
                lastUpdate = DateTime.Now,
                locale = "pt-BR",
                maritalStatus = "Marital",
                position = "Developer",
                type = "USER"
            };
        }

        private Profile getProfile(Person person)
        {
            return new Profile()
            {
                id = person.id,
                personId = person.id,
                birthdate = person.birthdate,
                braggingRights = "",
                coach = "viveiros",
                coverURL = "",
                displayName = person.displayName,
                email = person.email,
                employerName = person.company,
                gender = person.gender,
                imageURL = "",
                introduction = "",
                jobTitle = person.position,
                lastUpdated = person.lastUpdate,
                locale = person.locale,
                manager = "murilo",
                maritalStatus = person.maritalStatus,
                position = person.position,
                profileURL = "https://plus.google.com/117476354191473801408",
                providerId = "PatrinhaniGooglePlus",
                providerUserId = "117476354191473801408",
                tagLine = "",
                username = "patrinhani",
            };
        }
    }
}
