using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using biblio.DB;
using biblio.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace biblio.Controllers
{
    [Produces("application/json")]
    [Route("api/")]
    public class EditoraController : Controller
    {
        private BiblioMongoDB _db;

        public EditoraController(BiblioMongoDB db)
        {
            _db = db;
        }

        [HttpGet("editoras")]
        public IEnumerable<Editora> Get()
        {
            return _db.Editoras.Find(_ => true).ToList();
        }

        [HttpGet("editora/{id}")]
        public Editora Get(string id)
        {
            return _db.Editoras.Find(x => x.EditoraId == id).SingleOrDefault();
        }

        // POST api/values
        [HttpPost("editora")]
        public Editora Post([FromBody]Editora editora)
        {
            if (editora != null) 
                _db.Editoras.InsertOne(editora);
            return editora;        }

        [HttpPut("editora/{id}")]
        public Editora Put(string id, [FromBody]Editora editora)
        {
            if (editora != null)
                _db.Editoras.ReplaceOne(x => x.EditoraId == id, editora);
            return editora;
        }

    }
}