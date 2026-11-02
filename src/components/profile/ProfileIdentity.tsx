import { portfolio } from '../../data/portfolio';

export default function ProfileIdentity() {
  return (
    <div className="myInfo__profile__jk mt-7 text-center">
      <h2 className="first text-5xl leading-tight font-bold text-resume-accent">
        {portfolio.familyName}
      </h2>
      <h2 className="second text-3xl leading-tight font-bold">
        {portfolio.givenName}
      </h2>
      <p className="job mt-4 text-xl text-neutral-400">{portfolio.role}</p>
    </div>
  );
}
