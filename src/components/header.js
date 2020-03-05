import React from 'react'
function Header () {
  return (<div id='header'>
    <div className='header_logotype_container'>
      <h1 className='logotype_name'>Abdelmoula <span className='purple'>Ahmed</span></h1>
      <h2 className='logotype_occupation'>FullStack JS Developer</h2>
    </div>
    <div className='header_menu_container'>
      <ul className='download_print_buttons horizontal_list'>
        {/* <li><a href='#'><span className='icon entypo-download' />Download CV</a></li>
        <li><a href='#'><span className='icon entypo-print' />Print CV</a></li> */}
      </ul>
      <div className='clear' />
      <ul className='header_menu horizontal_list'>
        <li><a className='no_border purple' href='#'>Profile</a></li>
        <li><a href='#'>Education</a></li>
        <li><a href='#'>Skills</a></li>
        <li><a href='#'>Work Experience</a></li>
        <li><a href='#'>Featured Projects</a></li>
        <li><a href='#'>Awards</a></li>
      </ul>
    </div>
  </div>)
}

export default Header
