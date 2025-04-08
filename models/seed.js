require("dotenv").config(); // for .env support
const mongoose = require("mongoose");
const MPModel = require("./MPModel");
const UserModel = require("./UserModel");

async function seed() {
  try {
    await mongoose.connect('mongodb+srv://itssidlamba:1234@cdnc-backend.qmiuwmr.mongodb.net/?retryWrites=true&w=majority&appName=cdnc-backend'); // set this in your .env file

    // Sample MP
    await MPModel.create({
     
        
            "First Name": "Ziad",
            "Last Name": "Aboultaif",
            "Constituency": "Edmonton Manning",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Scott",
            "Last Name": "Aitchison",
            "Constituency": "Parry Sound—Muskoka",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Dan",
            "Last Name": "Albas",
            "Constituency": "Central Okanagan—Similkameen—Nicola",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Omar",
            "Last Name": "Alghabra",
            "Constituency": "Mississauga Centre",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Shafqat",
            "Last Name": "Ali",
            "Constituency": "Brampton Centre",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Dean",
            "Last Name": "Allison",
            "Constituency": "Niagara West",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Anita",
            "Last Name": "Anand",
            "Constituency": "Oakville",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Gary",
            "Last Name": "Anandasangaree",
            "Constituency": "Scarborough—Rouge Park",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Charlie",
            "Last Name": "Angus",
            "Constituency": "Timmins—James Bay",
            "Province / Territory": "Ontario",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Mel",
            "Last Name": "Arnold",
            "Constituency": "North Okanagan—Shuswap",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "René",
            "Last Name": "Arseneault",
            "Constituency": "Madawaska—Restigouche",
            "Province / Territory": "New Brunswick",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Chandra",
            "Last Name": "Arya",
            "Constituency": "Nepean",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Niki",
            "Last Name": "Ashton",
            "Constituency": "Churchill—Keewatinook Aski",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Jenica",
            "Last Name": "Atwin",
            "Constituency": "Fredericton",
            "Province / Territory": "New Brunswick",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Taylor",
            "Last Name": "Bachrach",
            "Constituency": "Skeena—Bulkley Valley",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Vance",
            "Last Name": "Badawey",
            "Constituency": "Niagara Centre",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Parm",
            "Last Name": "Bains",
            "Constituency": "Steveston—Richmond East",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Yvan",
            "Last Name": "Baker",
            "Constituency": "Etobicoke Centre",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Tony",
            "Last Name": "Baldinelli",
            "Constituency": "Niagara Falls",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "John",
            "Last Name": "Barlow",
            "Constituency": "Foothills",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Michael",
            "Last Name": "Barrett",
            "Constituency": "Leeds—Grenville—Thousand Islands and Rideau Lakes",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Lisa Marie",
            "Last Name": "Barron",
            "Constituency": "Nanaimo—Ladysmith",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Xavier",
            "Last Name": "Barsalou-Duval",
            "Constituency": "Pierre-Boucher—Les Patriotes—Verchères",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Jaime",
            "Last Name": "Battiste",
            "Constituency": "Sydney—Victoria",
            "Province / Territory": "Nova Scotia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Mario",
            "Last Name": "Beaulieu",
            "Constituency": "La Pointe-de-l'Île",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Terry",
            "Last Name": "Beech",
            "Constituency": "Burnaby North—Seymour",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Rachel",
            "Last Name": "Bendayan",
            "Constituency": "Outremont",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Stéphane",
            "Last Name": "Bergeron",
            "Constituency": "Montarville",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Luc",
            "Last Name": "Berthold",
            "Constituency": "Mégantic—L'Érable",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Sylvie",
            "Last Name": "Bérubé",
            "Constituency": "Abitibi—Baie-James—Nunavik—Eeyou",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "James",
            "Last Name": "Bezan",
            "Constituency": "Selkirk—Interlake—Eastman",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Marie-Claude",
            "Last Name": "Bibeau",
            "Constituency": "Compton—Stanstead",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Chris",
            "Last Name": "Bittle",
            "Constituency": "St. Catharines",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Bill",
            "Last Name": "Blair",
            "Constituency": "Scarborough Southwest",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Yves-François",
            "Last Name": "Blanchet",
            "Constituency": "Beloeil—Chambly",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Maxime",
            "Last Name": "Blanchette-Joncas",
            "Constituency": "Rimouski-Neigette—Témiscouata—Les Basques",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Rachel",
            "Last Name": "Blaney",
            "Constituency": "North Island—Powell River",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Kelly",
            "Last Name": "Block",
            "Constituency": "Carlton Trail—Eagle Creek",
            "Province / Territory": "Saskatchewan",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Kody",
            "Last Name": "Blois",
            "Constituency": "Kings—Hants",
            "Province / Territory": "Nova Scotia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Randy",
            "Last Name": "Boissonnault",
            "Constituency": "Edmonton Centre",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Alexandre",
            "Last Name": "Boulerice",
            "Constituency": "Rosemont—La Petite-Patrie",
            "Province / Territory": "Quebec",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Valerie",
            "Last Name": "Bradford",
            "Constituency": "Kitchener South—Hespeler",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Richard",
            "Last Name": "Bragdon",
            "Constituency": "Tobique—Mactaquac",
            "Province / Territory": "New Brunswick",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "John",
            "Last Name": "Brassard",
            "Constituency": "Barrie—Innisfil",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Élisabeth",
            "Last Name": "Brière",
            "Constituency": "Sherbrooke",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Larry",
            "Last Name": "Brock",
            "Constituency": "Brantford—Brant",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Alexis",
            "Last Name": "Brunelle-Duceppe",
            "Constituency": "Lac-Saint-Jean",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Blaine",
            "Last Name": "Calkins",
            "Constituency": "Red Deer—Lacombe",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Richard",
            "Last Name": "Cannings",
            "Constituency": "South Okanagan—West Kootenay",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Frank",
            "Last Name": "Caputo",
            "Constituency": "Kamloops—Thompson—Cariboo",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Ben",
            "Last Name": "Carr",
            "Constituency": "Winnipeg South Centre",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "Liberal",
            "Start Date": "2023-06-19 12:00:00 a.m."
          },
          {
            "First Name": "Colin",
            "Last Name": "Carrie",
            "Constituency": "Oshawa",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Sean",
            "Last Name": "Casey",
            "Constituency": "Charlottetown",
            "Province / Territory": "Prince Edward Island",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Louise",
            "Last Name": "Chabot",
            "Constituency": "Thérèse-De Blainville",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Bardish",
            "Last Name": "Chagger",
            "Constituency": "Waterloo",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "George",
            "Last Name": "Chahal",
            "Constituency": "Calgary Skyview",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Adam",
            "Last Name": "Chambers",
            "Constituency": "Simcoe North",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "François-Philippe",
            "Last Name": "Champagne",
            "Constituency": "Saint-Maurice—Champlain",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Martin",
            "Last Name": "Champoux",
            "Constituency": "Drummond",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Sophie",
            "Last Name": "Chatel",
            "Constituency": "Pontiac",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Shaun",
            "Last Name": "Chen",
            "Constituency": "Scarborough North",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Paul",
            "Last Name": "Chiang",
            "Constituency": "Markham—Unionville",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Michael",
            "Last Name": "Chong",
            "Constituency": "Wellington—Halton Hills",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Chad",
            "Last Name": "Collins",
            "Constituency": "Hamilton East—Stoney Creek",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Laurel",
            "Last Name": "Collins",
            "Constituency": "Victoria",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Michael",
            "Last Name": "Cooper",
            "Constituency": "St. Albert—Edmonton",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Serge",
            "Last Name": "Cormier",
            "Constituency": "Acadie—Bathurst",
            "Province / Territory": "New Brunswick",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Michael",
            "Last Name": "Coteau",
            "Constituency": "Don Valley East",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Chris",
            "Last Name": "d'Entremont",
            "Constituency": "West Nova",
            "Province / Territory": "Nova Scotia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Julie",
            "Last Name": "Dabrusin",
            "Constituency": "Toronto—Danforth",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Marc",
            "Last Name": "Dalton",
            "Constituency": "Pitt Meadows—Maple Ridge",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Pam",
            "Last Name": "Damoff",
            "Constituency": "Oakville North—Burlington",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Leila",
            "Last Name": "Dance",
            "Constituency": "Elmwood—Transcona",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "NDP",
            "Start Date": "2024-09-16 12:00:00 a.m."
          },
          {
            "First Name": "Raquel",
            "Last Name": "Dancho",
            "Constituency": "Kildonan—St. Paul",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Scot",
            "Last Name": "Davidson",
            "Constituency": "York—Simcoe",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Don",
            "Last Name": "Davies",
            "Constituency": "Vancouver Kingsway",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Claude",
            "Last Name": "DeBellefeuille",
            "Constituency": "Salaberry—Suroît",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Gérard",
            "Last Name": "Deltell",
            "Constituency": "Louis-Saint-Laurent",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Caroline",
            "Last Name": "Desbiens",
            "Constituency": "Beauport—Côte-de-Beaupré—Île d'Orléans—Charlevoix",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Luc",
            "Last Name": "Desilets",
            "Constituency": "Rivière-des-Mille-Îles",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Blake",
            "Last Name": "Desjarlais",
            "Constituency": "Edmonton Griesbach",
            "Province / Territory": "Alberta",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Sukh",
            "Last Name": "Dhaliwal",
            "Constituency": "Surrey—Newton",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Anju",
            "Last Name": "Dhillon",
            "Constituency": "Dorval—Lachine—LaSalle",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Lena Metlege",
            "Last Name": "Diab",
            "Constituency": "Halifax West",
            "Province / Territory": "Nova Scotia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Todd",
            "Last Name": "Doherty",
            "Constituency": "Cariboo—Prince George",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Han",
            "Last Name": "Dong",
            "Constituency": "Don Valley North",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Independent",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Terry",
            "Last Name": "Dowdall",
            "Constituency": "Simcoe—Grey",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Earl",
            "Last Name": "Dreeshen",
            "Constituency": "Red Deer—Mountain View",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Francis",
            "Last Name": "Drouin",
            "Constituency": "Glengarry—Prescott—Russell",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Emmanuel",
            "Last Name": "Dubourg",
            "Constituency": "Bourassa",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Jean-Yves",
            "Last Name": "Duclos",
            "Constituency": "Québec",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Terry",
            "Last Name": "Duguid",
            "Constituency": "Winnipeg South",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Eric",
            "Last Name": "Duncan",
            "Constituency": "Stormont—Dundas—South Glengarry",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Kirsty",
            "Last Name": "Duncan",
            "Constituency": "Etobicoke North",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Julie",
            "Last Name": "Dzerowicz",
            "Constituency": "Davenport",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Ali",
            "Last Name": "Ehsassi",
            "Constituency": "Willowdale",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Fayçal",
            "Last Name": "El-Khoury",
            "Constituency": "Laval—Les Îles",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Stephen",
            "Last Name": "Ellis",
            "Constituency": "Cumberland—Colchester",
            "Province / Territory": "Nova Scotia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Dave",
            "Last Name": "Epp",
            "Constituency": "Chatham-Kent—Leamington",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Nathaniel",
            "Last Name": "Erskine-Smith",
            "Constituency": "Beaches—East York",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Rosemarie",
            "Last Name": "Falk",
            "Constituency": "Battlefords—Lloydminster",
            "Province / Territory": "Saskatchewan",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Ted",
            "Last Name": "Falk",
            "Constituency": "Provencher",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Ed",
            "Last Name": "Fast",
            "Constituency": "Abbotsford",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Greg",
            "Last Name": "Fergus",
            "Constituency": "Hull—Aylmer",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Michelle",
            "Last Name": "Ferreri",
            "Constituency": "Peterborough—Kawartha",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Kerry-Lynne",
            "Last Name": "Findlay",
            "Constituency": "South Surrey—White Rock",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Darren",
            "Last Name": "Fisher",
            "Constituency": "Dartmouth—Cole Harbour",
            "Province / Territory": "Nova Scotia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Peter",
            "Last Name": "Fonseca",
            "Constituency": "Mississauga East—Cooksville",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Mona",
            "Last Name": "Fortier",
            "Constituency": "Ottawa—Vanier",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Rhéal Éloi",
            "Last Name": "Fortin",
            "Constituency": "Rivière-du-Nord",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Peter",
            "Last Name": "Fragiskatos",
            "Constituency": "London North Centre",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Sean",
            "Last Name": "Fraser",
            "Constituency": "Central Nova",
            "Province / Territory": "Nova Scotia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Chrystia",
            "Last Name": "Freeland",
            "Constituency": "University—Rosedale",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Hedy",
            "Last Name": "Fry",
            "Constituency": "Vancouver Centre",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Iqwinder",
            "Last Name": "Gaheer",
            "Constituency": "Mississauga—Malton",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Anna",
            "Last Name": "Gainey",
            "Constituency": "Notre-Dame-de-Grâce—Westmount",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2023-06-19 12:00:00 a.m."
          },
          {
            "First Name": "Cheryl",
            "Last Name": "Gallant",
            "Constituency": "Renfrew—Nipissing—Pembroke",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Jean-Denis",
            "Last Name": "Garon",
            "Constituency": "Mirabel",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Marie-Hélène",
            "Last Name": "Gaudreau",
            "Constituency": "Laurentides—Labelle",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Leah",
            "Last Name": "Gazan",
            "Constituency": "Winnipeg Centre",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Bernard",
            "Last Name": "Généreux",
            "Constituency": "Montmagny—L'Islet—Kamouraska—Rivière-du-Loup",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Garnett",
            "Last Name": "Genuis",
            "Constituency": "Sherwood Park—Fort Saskatchewan",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Mark",
            "Last Name": "Gerretsen",
            "Constituency": "Kingston and the Islands",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Marilène",
            "Last Name": "Gill",
            "Constituency": "Manicouagan",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Marilyn",
            "Last Name": "Gladu",
            "Constituency": "Sarnia—Lambton",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Joël",
            "Last Name": "Godin",
            "Constituency": "Portneuf—Jacques-Cartier",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Laila",
            "Last Name": "Goodridge",
            "Constituency": "Fort McMurray—Cold Lake",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Karina",
            "Last Name": "Gould",
            "Constituency": "Burlington",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Jacques",
            "Last Name": "Gourde",
            "Constituency": "Lévis—Lotbinière",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Tracy",
            "Last Name": "Gray",
            "Constituency": "Kelowna—Lake Country",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Matthew",
            "Last Name": "Green",
            "Constituency": "Hamilton Centre",
            "Province / Territory": "Ontario",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Steven",
            "Last Name": "Guilbeault",
            "Constituency": "Laurier—Sainte-Marie",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Patty",
            "Last Name": "Hajdu",
            "Constituency": "Thunder Bay—Superior North",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Jasraj Singh",
            "Last Name": "Hallan",
            "Constituency": "Calgary Forest Lawn",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Brendan",
            "Last Name": "Hanley",
            "Constituency": "Yukon",
            "Province / Territory": "Yukon",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Ken",
            "Last Name": "Hardie",
            "Constituency": "Fleetwood—Port Kells",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Lisa",
            "Last Name": "Hepfner",
            "Constituency": "Hamilton Mountain",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Randy",
            "Last Name": "Hoback",
            "Constituency": "Prince Albert",
            "Province / Territory": "Saskatchewan",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Mark",
            "Last Name": "Holland",
            "Constituency": "Ajax",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Anthony",
            "Last Name": "Housefather",
            "Constituency": "Mount Royal",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Carol",
            "Last Name": "Hughes",
            "Constituency": "Algoma—Manitoulin—Kapuskasing",
            "Province / Territory": "Ontario",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Ahmed",
            "Last Name": "Hussen",
            "Constituency": "York South—Weston",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Gudie",
            "Last Name": "Hutchings",
            "Constituency": "Long Range Mountains",
            "Province / Territory": "Newfoundland and Labrador",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Angelo",
            "Last Name": "Iacono",
            "Constituency": "Alfred-Pellan",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Lori",
            "Last Name": "Idlout",
            "Constituency": "Nunavut",
            "Province / Territory": "Nunavut",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Marci",
            "Last Name": "Ien",
            "Constituency": "Toronto Centre",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Helena",
            "Last Name": "Jaczek",
            "Constituency": "Markham—Stouffville",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Tamara",
            "Last Name": "Jansen",
            "Constituency": "Cloverdale—Langley City",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "Conservative",
            "Start Date": "2024-12-16 12:00:00 a.m."
          },
          {
            "First Name": "Matt",
            "Last Name": "Jeneroux",
            "Constituency": "Edmonton Riverbend",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Jamil",
            "Last Name": "Jivani",
            "Constituency": "Durham",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2024-03-04 12:00:00 a.m."
          },
          {
            "First Name": "Gord",
            "Last Name": "Johns",
            "Constituency": "Courtenay—Alberni",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Mélanie",
            "Last Name": "Joly",
            "Constituency": "Ahuntsic-Cartierville",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Yvonne",
            "Last Name": "Jones",
            "Constituency": "Labrador",
            "Province / Territory": "Newfoundland and Labrador",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Majid",
            "Last Name": "Jowhari",
            "Constituency": "Richmond Hill",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Peter",
            "Last Name": "Julian",
            "Constituency": "New Westminster—Burnaby",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Arielle",
            "Last Name": "Kayabaga",
            "Constituency": "London West",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Mike",
            "Last Name": "Kelloway",
            "Constituency": "Cape Breton—Canso",
            "Province / Territory": "Nova Scotia",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Pat",
            "Last Name": "Kelly",
            "Constituency": "Calgary Rocky Ridge",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Iqra",
            "Last Name": "Khalid",
            "Constituency": "Mississauga—Erin Mills",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Arpan",
            "Last Name": "Khanna",
            "Constituency": "Oxford",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2023-06-19 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Kamal",
            "Last Name": "Khera",
            "Constituency": "Brampton West",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Robert",
            "Last Name": "Kitchen",
            "Constituency": "Souris—Moose Mountain",
            "Province / Territory": "Saskatchewan",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Tom",
            "Last Name": "Kmiec",
            "Constituency": "Calgary Shepard",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Annie",
            "Last Name": "Koutrakis",
            "Constituency": "Vimy",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Michael",
            "Last Name": "Kram",
            "Constituency": "Regina—Wascana",
            "Province / Territory": "Saskatchewan",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Shelby",
            "Last Name": "Kramp-Neuman",
            "Constituency": "Hastings—Lennox and Addington",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Damien",
            "Last Name": "Kurek",
            "Constituency": "Battle River—Crowfoot",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Stephanie",
            "Last Name": "Kusie",
            "Constituency": "Calgary Midnapore",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Irek",
            "Last Name": "Kusmierczyk",
            "Constituency": "Windsor—Tecumseh",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Jenny",
            "Last Name": "Kwan",
            "Constituency": "Vancouver East",
            "Province / Territory": "British Columbia",
            "Political Affiliation": "NDP",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Mike",
            "Last Name": "Lake",
            "Constituency": "Edmonton—Wetaskiwin",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Marie-France",
            "Last Name": "Lalonde",
            "Constituency": "Orléans",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Emmanuella",
            "Last Name": "Lambropoulos",
            "Constituency": "Saint-Laurent",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Kevin",
            "Last Name": "Lamoureux",
            "Constituency": "Winnipeg North",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Melissa",
            "Last Name": "Lantsman",
            "Constituency": "Thornhill",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Viviane",
            "Last Name": "Lapointe",
            "Constituency": "Sudbury",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Andréanne",
            "Last Name": "Larouche",
            "Constituency": "Shefford",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Patricia",
            "Last Name": "Lattanzio",
            "Constituency": "Saint-Léonard—Saint-Michel",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Stéphane",
            "Last Name": "Lauzon",
            "Constituency": "Argenteuil—La Petite-Nation",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Philip",
            "Last Name": "Lawrence",
            "Constituency": "Northumberland—Peterborough South",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Dominic",
            "Last Name": "LeBlanc",
            "Constituency": "Beauséjour",
            "Province / Territory": "New Brunswick",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "Honorific Title": "Hon.",
            "First Name": "Diane",
            "Last Name": "Lebouthillier",
            "Constituency": "Gaspésie—Les Îles-de-la-Madeleine",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Richard",
            "Last Name": "Lehoux",
            "Constituency": "Beauce",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Sébastien",
            "Last Name": "Lemire",
            "Constituency": "Abitibi—Témiscamingue",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Bloc Québécois",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Branden",
            "Last Name": "Leslie",
            "Constituency": "Portage—Lisgar",
            "Province / Territory": "Manitoba",
            "Political Affiliation": "Conservative",
            "Start Date": "2023-06-19 12:00:00 a.m."
          },
          {
            "First Name": "Chris",
            "Last Name": "Lewis",
            "Constituency": "Essex",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Leslyn",
            "Last Name": "Lewis",
            "Constituency": "Haldimand—Norfolk",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Ron",
            "Last Name": "Liepert",
            "Constituency": "Calgary Signal Hill",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Joël",
            "Last Name": "Lightbound",
            "Constituency": "Louis-Hébert",
            "Province / Territory": "Quebec",
            "Political Affiliation": "Liberal",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Dane",
            "Last Name": "Lloyd",
            "Constituency": "Sturgeon River—Parkland",
            "Province / Territory": "Alberta",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          },
          {
            "First Name": "Ben",
            "Last Name": "Lobb",
            "Constituency": "Huron—Bruce",
            "Province / Territory": "Ontario",
            "Political Affiliation": "Conservative",
            "Start Date": "2021-09-20 12:00:00 a.m."
          }
      );

    // Sample User
    await UserModel.create({
      fullName: "Sid Lamba",
      email: "sidlamba@example.com",
      city: "Toronto",
      province: "Ontario",
      zipCode: "M5V 2T6",
      description: "Caregiver and advocate",
      password: "1234"
    });

    console.log("Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding:", err);
    process.exit(1);
  }
}

seed();
