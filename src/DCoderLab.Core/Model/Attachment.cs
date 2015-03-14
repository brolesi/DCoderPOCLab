using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCoderLab.Core.Model
{
    public class Attachment
    {

        public long id { get; set; }
        public long cardId { get; set; }
        public String type { get; set; }
        public String gcsBucket { get; set; }
        public String gcsFileName { get; set; }
        public String displayName { get; set; }
        public String content { get; set; }
        public String contentURL { get; set; }
        public String imageURL { get; set; }
        public String imageType { get; set; }
        public long imageHeight { get; set; }
        public long imageWidth { get; set; }
        public String originalImageURL { get; set; }
        public String fullImageURL { get; set; }
        public long fullImageHeight { get; set; }
        public long fullImageWidth { get; set; }
        public String embedType { get; set; }
        public String embedURL { get; set; }
        public String documentType { get; set; }
        public String tableauUrl { get; set; }
        public String tableauSource { get; set; }
        public String worksheetName { get; set; }

    }
}
