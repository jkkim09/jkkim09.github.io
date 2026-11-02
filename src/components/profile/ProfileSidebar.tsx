import { cn } from '../../utile/cn';
import { portfolio } from '../../data/portfolio';
import { hobbies, skillGroups } from '../../data/skills';
import IconGrid from './IconGrid';
import ProfileIdentity from './ProfileIdentity';
import SectionTitle from './SectionTitle';

const contacts = [
  { label: 'Phone', value: portfolio.phone, href: `tel:${portfolio.phone}` },
  { label: 'Email', value: portfolio.email, href: `mailto:${portfolio.email}` },
  { label: 'Website / SNS', value: portfolio.website, href: portfolio.website },
  { label: 'Address', value: portfolio.address },
];

export default function ProfileSidebar() {
  return (
    <aside className="myInfo min-w-0 bg-[#e7e8ea]">
      <div className="myInfo__profile px-6 py-8">
        <div
          className={cn(
            'myInfo__profile__Image mx-auto size-46 max-w-full overflow-hidden',
            'rounded-full border-2 border-resume-accent',
          )}
        >
          <img
            src={portfolio.avatar}
            alt={`${portfolio.name} 프로필 일러스트`}
            width="184"
            height="184"
            className="size-full object-cover"
          />
        </div>
        <ProfileIdentity />
        <section className="listArea m-t-50 mt-10">
          <SectionTitle>CONTACT</SectionTitle>
          <dl className="listArea-contact mt-3 space-y-5 px-2 text-sm">
            {contacts.map((contact) => (
              <div key={contact.label}>
                <dt className="title font-bold">{contact.label}</dt>
                <dd className="mt-1 wrap-anywhere">
                  {contact.href ? (
                    <a href={contact.href}>{contact.value}</a>
                  ) : (
                    contact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="listArea m-t-50 mt-10">
          <SectionTitle>hobby</SectionTitle>
          <div className="listArea-list">
            <IconGrid items={hobbies} />
          </div>
        </section>
        <section className="listArea m-t-50 mt-10">
          <SectionTitle>SKILLS</SectionTitle>
          {skillGroups.map((group) => (
            <div key={group.id} className="listArea-list m-t-35 mt-6">
              <h3 className="subTitle text-center text-xs font-semibold">
                -{group.title}-
              </h3>
              <IconGrid items={group.items} />
            </div>
          ))}
        </section>
      </div>
    </aside>
  );
}
