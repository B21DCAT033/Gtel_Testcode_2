namespace Gtel.Client.Helpers
{
    public static class FileHelpers
    {
        public static string GenerateRandomFileName(string extension)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            var randomString = new string(Enumerable.Repeat(chars, 6)
                .Select(s => s[random.Next(s.Length)]).ToArray());

            return $"{randomString}{extension}";
        }
    }
}
