using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using biblio.DB;
using biblio.DTOs;
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
        public IEnumerable<EditoraDTO> Get()
        {
            var editoras = _db.Editoras.Find(_ => true).ToList();
            var dtos = new List<EditoraDTO>();
            editoras.ForEach(x => dtos.Add(new EditoraDTO
            {
                Id = x.EditoraId,
                Nome = x.Nome,
                Email = x.Email
            }));
            return dtos;
        }

        [HttpGet("editora/{id}")]
        public EditoraDTO Get(string id)
        {
            var editora = _db.Editoras.Find(x => x.EditoraId == id).SingleOrDefault();
            return new EditoraDTO
            {
                Id = editora.EditoraId,
                Nome = editora.Nome,
                Email = editora.Email
            };
        }

        // POST api/values
        [HttpPost("editora")]
        public EditoraDTO Post([FromBody]EditoraDTO dto)
        {
            if (dto != null)
            {
                var editora = new Editora
                {
                    Nome = dto.Nome,
                    Email = dto.Email
                };
                _db.Editoras.InsertOne(editora);
                dto.Id = editora.EditoraId;
            }
            return dto;
        }

        [HttpPut("editora/{id}")]
        public EditoraDTO Put(string id, [FromBody]EditoraDTO dto)
        {
            if (dto != null)
            {
                var editora = _db.Editoras.Find(x => x.EditoraId == id).SingleOrDefault();
                editora.Nome = dto.Nome;
                editora.Email = dto.Email;
                _db.Editoras.ReplaceOne(x => x.EditoraId == id, editora);
            }
            return dto;
        }

    }
}