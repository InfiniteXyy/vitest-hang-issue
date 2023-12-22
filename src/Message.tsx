import DOMPurify from 'dompurify';

const dompurify = DOMPurify();

const SystemMessage = ({ text }: { text: string }) => {
  return (
    <div
      data-testid="message"
      dangerouslySetInnerHTML={{ __html: dompurify.sanitize(text) }}
    />
  );
};

export default SystemMessage;
