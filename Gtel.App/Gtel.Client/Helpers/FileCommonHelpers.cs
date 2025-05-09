using System.IO.Compression;

namespace Gtel.Client.Helpers
{
    public static class FileCommonHelpers
    {
        public static List<FileCommon> FileDictionaries = new List<FileCommon>
        {
            new FileCommon
            {
                Extension = ".pdf",
                ContentType = "application/pdf",
                FileSignature = new byte[] { 0x25, 0x50, 0x44, 0x46, 0x2D }
            },

            new FileCommon
            {
                Extension = ".png",
                ContentType = "image/png",
                FileSignature = new byte[] { 0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A }
            },

            new FileCommon
            {
                Extension = ".jpg",
                ContentType = "image/jpeg",
                FileSignature = new byte[] { 0xFF, 0xD8, 0xFF }
            },

            new FileCommon
            {
                Extension = ".exe",
                ContentType = "application/octet-stream",
                FileSignature = new byte[] { 0x4D, 0x5A }
            },

            new FileCommon
            {
                Extension = ".txt",
                ContentType = "text/plain",
                FileSignature = new byte[] { 0xEF, 0xBB, 0xBF } // UTF-8 BOM
            },

            new FileCommon
            {
                Extension = ".zip",
                ContentType = "application/zip",
                FileSignature = new byte[] { 0x50, 0x4B, 0x03, 0x04 }
            },

            new FileCommon
            {
                Extension = ".mp3",
                ContentType = "audio/mpeg",
                FileSignature = new byte[] { 0x49, 0x44, 0x33 }
            },

            new FileCommon
            {
                Extension = ".mp4",
                ContentType = "video/mp4",
                FileSignature = new byte[] { 0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70 }
            },

            new FileCommon
            {
                Extension = ".xlsx",
                ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                FileSignature = new byte[] { 0x50, 0x4B, 0x03, 0x04 } // Same as zip
            },

            new FileCommon
            {
                Extension = ".xls",
                ContentType = "application/vnd.ms-excel",
                FileSignature = new byte[] { 0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1 }
            },

            new FileCommon
            {
                Extension = ".docx",
                ContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                FileSignature = new byte[] { 0x50, 0x4B, 0x03, 0x04 } // Same as zip
            },

            new FileCommon
            {
                Extension = ".doc",
                ContentType = "application/msword",
                FileSignature = new byte[] { 0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1 } // Same as zip
            },

            new FileCommon
            {
                Extension = ".ppt",
                ContentType = "application/vnd.ms-powerpoint",
                FileSignature = new byte[] { 0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1 }
            },

            new FileCommon
            {
                Extension = ".pptx",
                ContentType = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                FileSignature = new byte[] { 0x50, 0x4B, 0x03, 0x04 }
            }
    };


        public static async Task<bool> IsValidAsync(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return false;

            var fileExtension = Path.GetExtension(file.FileName)?.ToLowerInvariant();
            var matchedFile = FileDictionaries.FirstOrDefault(f => f.Extension == fileExtension);

            if (matchedFile == null)
                return false;

            if (!string.Equals(file.ContentType, matchedFile.ContentType, StringComparison.OrdinalIgnoreCase))
                return false;

            byte[] buffer = new byte[matchedFile.FileSignature.Length];
            using (var stream = file.OpenReadStream())
            {
                int bytesRead = await stream.ReadAsync(buffer, 0, buffer.Length);
                if (bytesRead != buffer.Length)
                    return false;
            }

            if (!buffer.Take(matchedFile.FileSignature.Length).SequenceEqual(matchedFile.FileSignature))
                return false;

            if (fileExtension == ".docx" || fileExtension == ".xlsx" || fileExtension == ".pptx")
            {
                return await IsMsOffice(file);
            }

            return true;
        }

        private static async Task<bool> IsMsOffice(IFormFile file)
        {
            var fileExtension = Path.GetExtension(file.FileName);
            if (fileExtension == ".docx")
            {
                if (!await ContainsEntryAsync(file, "word/"))
                    return false;
            }
            else if (fileExtension == ".xlsx")
            {
                if (!await ContainsEntryAsync(file, "xl/"))
                    return false;
            }
            else if (fileExtension == ".pptx")
            {
                if (!await ContainsEntryAsync(file, "ppt/"))
                    return false;
            }
            return true;
        }

        private static async Task<bool> ContainsEntryAsync(IFormFile file, string entryNameStartsWith)
        {
            using (var stream = file.OpenReadStream())
            using (var archive = new ZipArchive(stream, ZipArchiveMode.Read, leaveOpen: true))
            {
                return archive.Entries.Any(entry => entry.FullName.StartsWith(entryNameStartsWith, System.StringComparison.OrdinalIgnoreCase));
            }
        }
    }
}
