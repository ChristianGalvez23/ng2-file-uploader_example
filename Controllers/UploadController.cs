using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FileUploader.Controllers {
    public class UploadController : Controller {

        public UploadController () {

        }

        [HttpPost ()]
        public async Task<IActionResult> SaveFiles (IFormFile file) {
            if (file == null || file.Length == 0)
                return NotFound ("file not selected");

            var path = Path.Combine (
                Directory.GetCurrentDirectory (), "wwwroot",
                file.FileName);

            using (var stream = new FileStream (path, FileMode.Create)) {
                await file.CopyToAsync (stream);
            }

            return Ok (file.Name);
        }

        [HttpGet ()]
        public string GetJson () {
            string n = "Mi nombre";
            return n;
        }

    }
}