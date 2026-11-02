import { portfolio } from '../../data/portfolio';
import { getCareerYear } from '../../utile/myYear';
import PortfolioSection from './PortfolioSection';

export default function Introduction() {
  return (
    <PortfolioSection id="index" title="INDEX">
      <p>{getCareerYear(portfolio.careerStartYear)}년차</p>
      <p>{portfolio.birthday}</p>
      <p>
        <a href={`tel:${portfolio.phone}`}>{portfolio.phone}</a>
      </p>
      <p>Kakao ID: {portfolio.kakaoId}</p>
      <p>
        <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
      </p>
    </PortfolioSection>
  );
}
