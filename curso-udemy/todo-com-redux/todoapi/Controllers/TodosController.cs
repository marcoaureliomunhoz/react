using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace todoapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        TodoDbContext _context;

        public TodosController(TodoDbContext context)
        {
            _context = context;
        }

        // GET api/todos
        [HttpGet]
        public ActionResult<IEnumerable<Todo>> Get()
        {
            return _context.Set<Todo>().ToList();
        }

        // GET api/todos/5
        [HttpGet("{id}")]
        public ActionResult<Todo> Get(int id)
        {
            return _context.Set<Todo>().FirstOrDefault(x => x.Id == id);
        }

        // POST api/todos
        [HttpPost]
        public ActionResult<int> Post([FromBody] Todo newTodo)
        {
            if (newTodo.Id > 0)
            {
                var todo = _context.Set<Todo>().FirstOrDefault(x => x.Id == newTodo.Id);
                if (todo != null)
                {
                    todo.Description = newTodo.Description;
                }
            }
            else
            {
                _context.Set<Todo>().Add(newTodo);
            }
            return _context.SaveChanges();
        }

        // DELETE api/todos/5
        [HttpDelete("{id}")]
        public ActionResult<int> Delete(int id)
        {
            var todo = _context.Set<Todo>().FirstOrDefault(x => x.Id == id);
            _context.Remove(todo);
            return _context.SaveChanges();
        }
    }
}
