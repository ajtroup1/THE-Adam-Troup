import "../../styles/App.css";
import "../../styles/styles.css"

function Resume(): JSX.Element {
  const pdfUrl = '../../docs/TroupAdamResumePDF.pdf';
  return (
    <div className="resume-main" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
      <h2 style={{ marginBottom: '0.25rem', color: 'var(--text-light)', fontSize: '2rem' }} className="text-light">Current Resume 2025</h2>
      <p style={{ marginBottom: '0.5rem', color: "var(--text-light)", fontStyle: "italic" }}>Download links below</p>
      <div className='document-container'>
        <object data={pdfUrl} type="application/pdf">
          <p className='text-light'>Alternative text - include a link to the PDF!</p>
        </object>
      </div>
      <div className="document-links-container">
        <ul>
          <li>
            <a className="document-link" href="../../docs/TroupAdamResume.docx" download>
              Download Resume (Word Document)
            </a>
          </li>
          <li>
            <a className="document-link" href={pdfUrl} download>
              Download Resume (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
