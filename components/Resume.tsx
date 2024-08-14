const Resume = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src="/images/resume.pdf"
        style={{ width: '100%', height: 'calc(100% - 50px)', border: 'none' }}
        title="Resume"
      />
    </div>
  );
};

export default Resume;
