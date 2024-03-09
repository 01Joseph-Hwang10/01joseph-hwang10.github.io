import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  email?: boolean;
  phone?: boolean;
  portfolio?: boolean;
  github?: boolean;
  leetcode?: boolean;
}

const Overview: React.FC<Props> = ({
  email = true,
  phone = true,
  portfolio = true,
  github = true,
  leetcode = false,
}) => {
  return (
    <div className="info-entry">
      <Helmet>
        {/* Google Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Helmet>
      {email && <span>이메일: joseph95501@gmail.com</span>}
      {phone && <span>휴대폰: 010-9048-9550</span>}
      {portfolio && (
        <span>
          포트폴리오:{" "}
          <a
            href="https://01joseph-hwang10.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            https://01joseph-hwang10.github.io/
          </a>
        </span>
      )}
      {github && (
        <span>
          Github:{" "}
          <a
            href="https://github.com/01Joseph-Hwang10/"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/01Joseph-Hwang10/
          </a>
        </span>
      )}
      {leetcode && (
        <span>
          LeetCode:{" "}
          <a
            href="https://leetcode.com/01Joseph-Hwang10/"
            target="_blank"
            rel="noreferrer"
          >
            https://leetcode.com/01Joseph-Hwang10/
          </a>
        </span>
      )}
    </div>
  );
};

export default Overview;
