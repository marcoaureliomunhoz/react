using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace biblio.Models
{
    public class Editora
    {
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        public string EditoraId { get; set; }
        public string Nome { get; set; } = "";
        public string Email { get; set; } = "";
    }
}
