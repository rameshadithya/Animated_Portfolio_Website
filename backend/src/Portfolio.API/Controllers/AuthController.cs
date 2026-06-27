using Microsoft.AspNetCore.Mvc;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class AuthController : ControllerBase
{
    [HttpPost("login")]
    public ActionResult Login()
    {
        return Accepted(new { status = "JWT login endpoint reserved." });
    }

    [HttpPost("logout")]
    public ActionResult Logout()
    {
        return Ok(new { status = "Client should discard the JWT." });
    }
}

