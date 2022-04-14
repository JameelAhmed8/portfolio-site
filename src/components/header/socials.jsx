import React from "react";
import {GrLinkedinOption} from 'react-icons/gr';
import {AiFillGithub} from 'react-icons/ai'
import {FaGitlab} from 'react-icons/fa'

function Socials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" targer="_blank"><GrLinkedinOption/></a>
      <a href="https://github.com" targer="_blank"><AiFillGithub/></a>
      <a href="https://gitlab.com" targer="_blank"><FaGitlab/></a>
    </div>
  );
};

export default Socials;
