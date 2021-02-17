using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]
    //[AllowAnonymous]
    public class UsersController : BaseApiController
    {
        //private readonly DataContext _context;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository,IMapper mapper)
        {
            //_context = context;
            _mapper = mapper;
            _userRepository = userRepository;
            
        }

        [HttpGet]
        //public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        //{
        //    var users =await _userRepository.GetUsersAsync();
        //    var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);
        //    return Ok(usersToReturn);
        //}
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            var users = await _userRepository.GetMembersAsync();
            return Ok(users);
        }
        [HttpGet("{username}")]
        //public async Task<ActionResult<MemberDto>> GetUser(string username)
        //{
        //    var users = await _userRepository.GetUserByUsernameAsync(username);
        //    return _mapper.Map<MemberDto>(users);

        //}
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            var users = await _userRepository.GetMemberAsync(username);
            return users;

        }

        [HttpPut]
        public async Task<ActionResult> UpdateUser(UpdateMemberDto memberUpdateDto)
        {
            var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _userRepository.GetUserByUsernameAsync(username);

            _mapper.Map(memberUpdateDto, user);

            _userRepository.Update(user);

            if (await _userRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to update user");
        }
    }
}
