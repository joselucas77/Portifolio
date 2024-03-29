import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';
import './styled.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
        <span
          className="animate scroll"
          style={{ '--i': 1 } as React.CSSProperties}
        ></span>
      </h2>

      <div className="skills-box">
        <div className="skills-content">
          <h3>
            Front-End{' '}
            <span
              className="animate scroll"
              style={{ '--i': 2 } as React.CSSProperties}
            ></span>
          </h3>
          <div className="content">
            <span>
              <SiHtml5 />
              HTML
            </span>
            <span>
              <SiCss3 />
              CSS
            </span>
            <span>
              <SiJavascript />
              Javascript
            </span>
            <span>
              <SiTypescript />
              Typescript
            </span>
            <span>
              {' '}
              <SiReact />
              React
            </span>
            <span>
              <SiNextdotjs />
              Next.js
            </span>
            <span>
              <SiBootstrap />
              Bootstrap
            </span>
            <span>
              <SiTailwindcss />
              tailwind
            </span>
          </div>
          <span
            className="animate scroll"
            style={{ '--i': 3 } as React.CSSProperties}
          ></span>
        </div>
        <div className="skills-content">
          <h3>
            Back-End
            <span
              className="animate scroll"
              style={{ '--i': 4 } as React.CSSProperties}
            ></span>
          </h3>
          <div className="content">
            <span>
              <SiNodedotjs />
              Node.js
            </span>
            <span>
              <SiTypescript />
              Typescript
            </span>
            <span>
              <SiPhp />
              PHP
            </span>
            <span>
              <SiMysql />
              MYSQL
            </span>
            <span>
              <SiMongodb />
              MongoDB
            </span>
            <span>
              <SiPostgresql />
              PostgreSQL
            </span>
          </div>
          <span
            className="animate scroll"
            style={{ '--i': 5 } as React.CSSProperties}
          ></span>
        </div>
      </div>
    </section>
  );
}

export default Skills;

// import './styled.css';

// function Skills() {
//   return (
//     <section className="skills" id="skills">
//       <h2 className="heading">
//         My <span>Skills</span>
//         <span
//           className="animate scroll"
//           style={{ '--i': 1 } as React.CSSProperties}
//         ></span>
//       </h2>

//       <div className="skill-row">
//         <div className="skill-columm">
//           <h3 className="title">
//             Front-end
//             <span
//               className="animate scroll"
//               style={{ '--i': 2 } as React.CSSProperties}
//             ></span>
//           </h3>
//           <div className="skills-box">
//             <div className="skills-content">
//               <div className="progress">
//                 <h3>
//                   HTML <span>100%</span>
//                 </h3>
//                 <div className="bar">
//                   <span></span>
//                 </div>
//               </div>
//               <div className="progress">
//                 <h3>
//                   CSS <span>90%</span>
//                 </h3>
//                 <div className="bar">
//                   <span></span>
//                 </div>
//               </div>
//               <div className="progress">
//                 <h3>
//                   JS <span>90%</span>
//                 </h3>
//                 <div className="bar">
//                   <span></span>
//                 </div>
//               </div>
//               <div className="progress">
//                 <h3>
//                   REACT <span>90%</span>
//                 </h3>
//                 <div className="bar">
//                   <span></span>
//                 </div>
//               </div>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 3 } as React.CSSProperties}
//             ></span>
//           </div>
//         </div>

//         <div className="skill-columm">
//           <h3 className="title">
//             Back-end
//             <span
//               className="animate scroll"
//               style={{ '--i': 4 } as React.CSSProperties}
//             ></span>
//           </h3>
//           <div className="skills-box">
//             <div className="skills-content">
//               <div className="progress">
//                 <h3>
//                   PHP <span>80%</span>
//                 </h3>
//                 <div className="bar">
//                   <span></span>
//                 </div>
//               </div>
//               <div className="progress">
//                 <h3>
//                   TYPESCRIPT <span>90%</span>
//                 </h3>
//                 <div className="bar">
//                   <span></span>
//                 </div>
//               </div>
//               <div className="progress">
//                 <h3>
//                   NODE.JS <span>80%</span>
//                 </h3>
//                 <div className="bar">
//                   <span></span>
//                 </div>
//               </div>
//               <div className="progress">
//                 <h3>
//                   MYSQL <span>80%</span>
//                 </h3>
//                 <div className="bar">
//                   <span></span>
//                 </div>
//               </div>
//             </div>
//             <span
//               className="animate scroll"
//               style={{ '--i': 5 } as React.CSSProperties}
//             ></span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;
