import { JSX } from "react";
import ResumePDf from "../assets/TroupAdamResume.pdf";

function Resume(): JSX.Element {
  return (
    <>
      <section>
        <header className="major">
          <h2>My Resume</h2>
        </header>
        <div className="resume-container">
          <article>
            <h3>Please select either option to download my resume in PDF or Word Document format</h3>
            <ul className="actions">
              <li className="resume-download-options"><a className="button" href={ResumePDf} download="AdamTroupResume.pdf">Download PDF</a><a className="button" href="../src/assets/TroupAdamResume.docx" download="AdamTroupResume.docx">Download Word Doc</a></li>
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}

export default Resume;