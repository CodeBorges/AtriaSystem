using AtriaSystem.Models;
using Newtonsoft.Json;

namespace AtriaSystem.DAL
{
    public class ApiServiceDAL
    {
        private static int amount = 3;

        public static int Amount(bool amountBool)
        {
            if (!amountBool)
            {
                return amount;
            }

            return amount += 3;
        }

        public static async Task<List<Usuario>> GetUsers(bool amountProfile)
        {

            using (var httpClient = new HttpClient())
            {
                var response = await httpClient.GetAsync($"https://api.randomuser.me/?results={Amount(amountProfile)}");

                if (response.IsSuccessStatusCode)
                {
                    var json = await response.Content.ReadAsStringAsync();
                    var result = JsonConvert.DeserializeObject<dynamic>(json);

                    var users = new List<Usuario>();

                    foreach (var item in result.results)
                    {
                        var user = new Usuario
                        {
                            Nome = item.name.first,
                            Sobrenome = item.name.last,
                            Foto = item.picture.large,
                            Telefone = item.phone,
                            DataNascimento = item.dob.date,
                            Sexo = item.gender
                        };
                        users.Add(user);
                    }

                    return users;
                }
            }

            return null;
        }

    }

}
