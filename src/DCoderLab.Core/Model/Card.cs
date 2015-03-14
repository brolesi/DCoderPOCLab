using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCoderLab.Core.Model
{
    public class Card
    {

        public long id { get; set; }
        public DateTime createdAt { get; set; }
        public String mnemonic { get; set; }
        public Boolean isFeatured { get; set; }
        public Boolean isAutoModerated { get; set; }
        public DateTime? updated { get; set; }
        public long authorId { get; set; }
        public String authorDisplayName { get; set; }
        public String authorImageURL { get; set; }
        public String authorEmail { get; set; }
        public String providerUserId { get; set; }
        public List<String> categoryNames { get; set; }
        public DateTime? expirationDate { get; set; }
        public DateTime? publishingDate { get; set; }
        public int securityLevel { get; set; }

        //content
        public String title { get; set; }
        public String description { get; set; }
        public String content { get; set; }
        public String providerContentId { get; set; }
        public String providerContentURL { get; set; }
        public String providerId { get; set; }
        public DateTime providerUpdated { get; set; }
        public DateTime providerPublished { get; set; }

        //i18n
        public List<String> languages { get; set; }
        public String detectedLanguage { get; set; }
        public List<String> regions { get; set; }
        public String geoCode { get; set; }
        public String address { get; set; }
        public String placeName { get; set; }

        public String community { get; set; }
        public String communityDisplayName { get; set; }

        public List<Attachment> attachments { get; set; }

        public Card()
        {
            categoryNames = new List<String>();
            languages = new List<String>();
            regions = new List<String>();
            attachments = new List<Attachment>();
        }

        public void addCategory(String category)
        {
            this.categoryNames.Add(category);
        }

        public void addAttachment(Attachment attachment)
        {
            this.attachments.Add(attachment);
        }


        public void addLanguage(String language)
        {
            languages.Add(language);
        }

        public void addRegion(String region)
        {
            regions.Add(region);
        }
    }      
}
