import { TermsAndCondsStyled } from "./styled/TermsAndCondStyled";

export const TermsAndConds = () => {
  return (
    <TermsAndCondsStyled>
      <input type="checkbox" required className="gdprCheck" />
      <p>
        I consent to the collection, processing, and storage of my personal data
        in accordance with the General Data Protection Regulation (GDPR) and the
        privacy policy of the website.
      </p>
    </TermsAndCondsStyled>
  );
};
