import { useMemo, useState } from "react";
import {
  AddressBook,
  ArrowClockwise,
  ArrowLeft,
  Buildings,
  CalendarBlank,
  CaretRight,
  ChartLineUp,
  Check,
  CirclesThreePlus,
  ClipboardText,
  CloudSlash,
  DotsThreeVertical,
  DownloadSimple,
  Eye,
  FunnelSimple,
  GearSix,
  Graph,
  House,
  Link,
  ListChecks,
  LockKey,
  MagnifyingGlass,
  MapPin,
  NotePencil,
  Path,
  Plus,
  ShieldCheck,
  SlidersHorizontal,
  Sparkle,
  Trash,
  User,
  UserCirclePlus,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const people = [
  {
    id: "me",
    name: "Vinay Gupta",
    initials: "VG",
    role: "Me",
    phone: "+91 98765 10001",
    email: "vinay@peoplegraph.local",
    city: "Banda",
    profession: "Software Developer / Law Aspirant",
    organization: "Independent",
    tags: ["Family", "Legal", "Software"],
    trust: "High Trust",
    source: "manual",
    lastContacted: "Today",
    connections: 8,
  },
  {
    id: "rajesh",
    name: "Rajesh Gupta",
    initials: "RG",
    role: "Father",
    phone: "+91 98765 10002",
    email: "rajesh@example.com",
    city: "Banda",
    profession: "Family",
    organization: "Gupta Family",
    tags: ["Family", "Banda"],
    trust: "High Trust",
    source: "imported",
    lastContacted: "Yesterday",
    connections: 3,
  },
  {
    id: "amit",
    name: "Amit Sharma",
    initials: "AS",
    role: "College Friend",
    phone: "+91 98765 10003",
    email: "amit@sample.com",
    city: "Noida",
    profession: "Product Manager",
    organization: "Northstar Labs",
    tags: ["College", "Noida"],
    trust: "Normal",
    source: "imported",
    lastContacted: "4 days ago",
    connections: 4,
  },
  {
    id: "rohit",
    name: "Rohit Verma",
    initials: "RV",
    role: "Lawyer Contact",
    phone: "+91 98765 10004",
    email: "rohit.verma@lawmail.in",
    city: "Delhi",
    profession: "Lawyer",
    organization: "Delhi District Courts",
    tags: ["Legal", "Delhi"],
    trust: "High Trust",
    source: "imported",
    lastContacted: "Yesterday",
    connections: 6,
  },
  {
    id: "sk",
    name: "Advocate S. K. Sharma",
    initials: "SK",
    role: "Advocate",
    phone: "+91 98765 10005",
    email: "sk.sharma@dhc.in",
    city: "Delhi",
    profession: "Advocate",
    organization: "Delhi High Court",
    tags: ["Legal", "Delhi", "High Trust"],
    trust: "High Trust",
    source: "imported",
    lastContacted: "Yesterday",
    connections: 5,
  },
  {
    id: "priya",
    name: "Priya Singh",
    initials: "PS",
    role: "Software Colleague",
    phone: "+91 98765 10006",
    email: "priya@company.dev",
    city: "Bengaluru",
    profession: "Engineering Lead",
    organization: "CloudKite",
    tags: ["Work", "Software"],
    trust: "High Trust",
    source: "imported",
    lastContacted: "3 days ago",
    connections: 5,
  },
  {
    id: "neha",
    name: "Neha Jain",
    initials: "NJ",
    role: "HR Contact",
    phone: "+91 98765 10007",
    email: "neha@talent.co",
    city: "Noida",
    profession: "HR Partner",
    organization: "TalentBridge",
    tags: ["Work", "Noida"],
    trust: "Normal",
    source: "imported",
    lastContacted: "2 weeks ago",
    connections: 3,
  },
  {
    id: "manoj",
    name: "Manoj Yadav",
    initials: "MY",
    role: "Real Estate Broker",
    phone: "+91 98765 10008",
    email: "manoj@property.in",
    city: "Banda",
    profession: "Real Estate Broker",
    organization: "Bundelkhand Realty",
    tags: ["Real Estate", "Banda"],
    trust: "Medium Trust",
    source: "imported",
    lastContacted: "2 days ago",
    connections: 4,
  },
  {
    id: "ramesh",
    name: "Ramesh Tiwari",
    initials: "RT",
    role: "Revenue Contact",
    phone: "+91 98765 10009",
    email: "ramesh.rev@gov.example",
    city: "Banda",
    profession: "Revenue Contact",
    organization: "Local Administration",
    tags: ["Revenue", "Banda"],
    trust: "Normal",
    source: "imported",
    lastContacted: "1 month ago",
    connections: 2,
  },
  {
    id: "ankit",
    name: "Ankit Gupta",
    initials: "AG",
    role: "Cousin",
    phone: "+91 98765 10010",
    email: "ankit@sample.com",
    city: "Lucknow",
    profession: "Business Analyst",
    organization: "FinAxis",
    tags: ["Family", "Lucknow"],
    trust: "High Trust",
    source: "imported",
    lastContacted: "5 days ago",
    connections: 4,
  },
  {
    id: "mehra",
    name: "Senior Advocate Mehra",
    initials: "SM",
    role: "Senior Lawyer",
    phone: "+91 98765 10011",
    email: "mehra@seniorchambers.in",
    city: "Delhi",
    profession: "Senior Advocate",
    organization: "Delhi High Court",
    tags: ["Legal", "Delhi"],
    trust: "High Trust",
    source: "imported",
    lastContacted: "Not contacted",
    connections: 3,
  },
  {
    id: "pooja",
    name: "Pooja Srivastava",
    initials: "PS",
    role: "Law Student",
    phone: "+91 98765 10012",
    email: "pooja@lawschool.edu",
    city: "Lucknow",
    profession: "Law Student",
    organization: "Lucknow University",
    tags: ["Legal", "College"],
    trust: "Normal",
    source: "imported",
    lastContacted: "1 week ago",
    connections: 3,
  },
  {
    id: "saurabh",
    name: "Saurabh Mishra",
    initials: "SM",
    role: "Builder Contact",
    phone: "+91 98765 10013",
    email: "saurabh@build.in",
    city: "Banda",
    profession: "Builder",
    organization: "Mishra Buildcon",
    tags: ["Real Estate", "Business"],
    trust: "Normal",
    source: "imported",
    lastContacted: "2 weeks ago",
    connections: 3,
  },
  {
    id: "deepak",
    name: "Deepak Jain",
    initials: "DJ",
    role: "Business Contact",
    phone: "+91 98765 10014",
    email: "deepak@trade.in",
    city: "Kanpur",
    profession: "Business Owner",
    organization: "Jain Traders",
    tags: ["Business", "Kanpur"],
    trust: "Normal",
    source: "imported",
    lastContacted: "3 weeks ago",
    connections: 2,
  },
  {
    id: "nidhi",
    name: "Nidhi Kapoor",
    initials: "NK",
    role: "Recruiter",
    phone: "+91 98765 10015",
    email: "nidhi@hiring.in",
    city: "Gurugram",
    profession: "Recruiter",
    organization: "HireLoop",
    tags: ["Work", "Recruiting"],
    trust: "Weak",
    source: "imported",
    lastContacted: "6 months ago",
    connections: 1,
  },
  {
    id: "farhan",
    name: "Farhan Ali",
    initials: "FA",
    role: "Consultant",
    phone: "+91 98765 10016",
    email: "farhan@consult.in",
    city: "Delhi",
    profession: "Consultant",
    organization: "Independent",
    tags: ["Business", "Delhi"],
    trust: "Normal",
    source: "imported",
    lastContacted: "1 month ago",
    connections: 2,
  },
  {
    id: "kavita",
    name: "Kavita Dubey",
    initials: "KD",
    role: "Local Contact",
    phone: "+91 98765 10017",
    email: "kavita@sample.com",
    city: "Banda",
    profession: "Teacher",
    organization: "City School Banda",
    tags: ["Banda", "Local"],
    trust: "Normal",
    source: "imported",
    lastContacted: "2 months ago",
    connections: 2,
  },
  {
    id: "gaurav",
    name: "Gaurav Saxena",
    initials: "GS",
    role: "Vendor",
    phone: "+91 98765 10018",
    email: "gaurav@vendor.in",
    city: "Noida",
    profession: "Vendor",
    organization: "OfficeWorks",
    tags: ["Vendor", "Noida"],
    trust: "Weak",
    source: "imported",
    lastContacted: "4 months ago",
    connections: 1,
  },
  {
    id: "swati",
    name: "Swati Mishra",
    initials: "SW",
    role: "College Friend",
    phone: "+91 98765 10019",
    email: "swati@alumni.in",
    city: "Pune",
    profession: "Designer",
    organization: "Studio North",
    tags: ["College", "Creative"],
    trust: "Normal",
    source: "imported",
    lastContacted: "2 months ago",
    connections: 2,
  },
  {
    id: "lalit",
    name: "Lalit Tripathi",
    initials: "LT",
    role: "Client",
    phone: "+91 98765 10020",
    email: "lalit@client.in",
    city: "Kanpur",
    profession: "Client",
    organization: "Tripathi Foods",
    tags: ["Client", "Business"],
    trust: "Normal",
    source: "imported",
    lastContacted: "3 weeks ago",
    connections: 2,
  },
  {
    id: "vivek",
    name: "Vivek Rai",
    initials: "VR",
    role: "Senior",
    phone: "+91 98765 10021",
    email: "vivek@company.dev",
    city: "Bengaluru",
    profession: "Engineering Manager",
    organization: "CloudKite",
    tags: ["Work", "Software"],
    trust: "High Trust",
    source: "imported",
    lastContacted: "Last week",
    connections: 4,
  },
  {
    id: "irfan",
    name: "Irfan Khan",
    initials: "IK",
    role: "Property Lawyer",
    phone: "+91 98765 10022",
    email: "irfan@propertylaw.in",
    city: "Lucknow",
    profession: "Property Lawyer",
    organization: "Khan Legal",
    tags: ["Legal", "Real Estate"],
    trust: "Normal",
    source: "imported",
    lastContacted: "1 month ago",
    connections: 3,
  },
  {
    id: "seema",
    name: "Seema Pathak",
    initials: "SP",
    role: "Advocate",
    phone: "+91 98765 10023",
    email: "seema@legal.in",
    city: "Delhi",
    profession: "Advocate",
    organization: "Tis Hazari Courts",
    tags: ["Legal", "Delhi"],
    trust: "Normal",
    source: "imported",
    lastContacted: "2 months ago",
    connections: 2,
  },
  {
    id: "mahesh",
    name: "Mahesh Patel",
    initials: "MP",
    role: "Local Banda Contact",
    phone: "+91 98765 10024",
    email: "mahesh@sample.com",
    city: "Banda",
    profession: "Accountant",
    organization: "Patel Associates",
    tags: ["Banda", "Business"],
    trust: "Normal",
    source: "imported",
    lastContacted: "1 month ago",
    connections: 2,
  },
  {
    id: "sonal",
    name: "Sonal Agarwal",
    initials: "SA",
    role: "Founder",
    phone: "+91 98765 10025",
    email: "sonal@startup.in",
    city: "Delhi",
    profession: "Founder",
    organization: "CaseTrail",
    tags: ["Founder", "Legal Tech"],
    trust: "Normal",
    source: "imported",
    lastContacted: "Last month",
    connections: 2,
  },
];

const relationships = [
  { from: "me", to: "rajesh", type: "father", strength: "Strong", confidence: "Confirmed", tag: "Family" },
  { from: "me", to: "amit", type: "college friend", strength: "Normal", confidence: "Confirmed", tag: "College" },
  { from: "amit", to: "rohit", type: "friend", strength: "Strong", confidence: "Confirmed", tag: "Legal" },
  { from: "rohit", to: "sk", type: "junior of", strength: "Strong", confidence: "Confirmed", tag: "Legal" },
  { from: "sk", to: "mehra", type: "works with", strength: "Strong", confidence: "Confirmed", tag: "Legal" },
  { from: "me", to: "priya", type: "colleague", strength: "Strong", confidence: "Confirmed", tag: "Work" },
  { from: "me", to: "manoj", type: "real estate contact", strength: "Normal", confidence: "Confirmed", tag: "Real Estate" },
  { from: "manoj", to: "ramesh", type: "knows", strength: "Normal", confidence: "Inferred", tag: "Banda" },
  { from: "me", to: "ankit", type: "cousin", strength: "Strong", confidence: "Confirmed", tag: "Family" },
  { from: "pooja", to: "rohit", type: "law network", strength: "Normal", confidence: "Confirmed", tag: "Legal" },
  { from: "saurabh", to: "manoj", type: "business contact", strength: "Normal", confidence: "Confirmed", tag: "Real Estate" },
  { from: "priya", to: "vivek", type: "reports to", strength: "Strong", confidence: "Confirmed", tag: "Work" },
  { from: "seema", to: "sk", type: "works with", strength: "Normal", confidence: "Unverified", tag: "Legal" },
  { from: "irfan", to: "manoj", type: "property matter", strength: "Normal", confidence: "Inferred", tag: "Real Estate" },
];

const importContacts = people.filter((person) => person.id !== "me");
const navItems = [
  { id: "dashboard", label: "Graph", icon: Graph },
  { id: "people", label: "People", icon: User },
  { id: "graph", label: "Expand", icon: CirclesThreePlus },
  { id: "summary", label: "Notes", icon: ClipboardText },
];

const filters = ["All", "Family", "Legal", "Work", "Real Estate", "College", "High Trust"];

function personById(id) {
  return people.find((person) => person.id === id);
}

function initialsColor(id) {
  const colors = {
    me: "teal",
    rajesh: "green",
    amit: "amber",
    rohit: "blue",
    sk: "violet",
    priya: "sand",
    manoj: "gold",
    mehra: "slate",
  };
  return colors[id] || "mint";
}

export function App() {
  const [screen, setScreen] = useState("onboarding");
  const [filter, setFilter] = useState("All");
  const [selectedPerson, setSelectedPerson] = useState("sk");
  const [selectedContacts, setSelectedContacts] = useState(() => new Set(importContacts.slice(0, 18).map((person) => person.id)));
  const [relationshipSaved, setRelationshipSaved] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [query, setQuery] = useState("");

  const visiblePeople = useMemo(() => {
    return people
      .filter((person) => person.id !== "me")
      .filter((person) => {
        const matchesFilter =
          filter === "All" ||
          person.tags.includes(filter) ||
          person.trust === filter ||
          person.role.includes(filter);
        const matchesQuery = [person.name, person.city, person.profession, person.organization, person.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchesFilter && matchesQuery;
      });
  }, [filter, query]);

  const currentPerson = personById(selectedPerson) || personById("sk");

  function go(next) {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleContact(id) {
    setSelectedContacts((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="app-shell">
      <div className="phone-frame">
        <Header screen={screen} go={go} />
        <main className="screen">
          {screen === "onboarding" && <Onboarding go={go} />}
          {screen === "privacy" && <Privacy go={go} />}
          {screen === "permission" && <Permission go={go} setPermissionDenied={setPermissionDenied} />}
          {screen === "permissionDenied" && <PermissionDenied go={go} />}
          {screen === "import" && (
            <ImportReview
              go={go}
              selectedContacts={selectedContacts}
              setSelectedContacts={setSelectedContacts}
              toggleContact={toggleContact}
            />
          )}
          {screen === "cleanup" && <Cleanup go={go} />}
          {screen === "dashboard" && <Dashboard go={go} filter={filter} setFilter={setFilter} setSelectedPerson={setSelectedPerson} />}
          {screen === "people" && (
            <PeopleList
              go={go}
              query={query}
              setQuery={setQuery}
              filter={filter}
              setFilter={setFilter}
              visiblePeople={visiblePeople}
              setSelectedPerson={setSelectedPerson}
            />
          )}
          {screen === "profile" && <PersonProfile person={currentPerson} go={go} />}
          {screen === "add" && <AddRelationship go={go} setRelationshipSaved={setRelationshipSaved} />}
          {screen === "smart" && <SmartEntry go={go} setRelationshipSaved={setRelationshipSaved} />}
          {screen === "graph" && <GraphView go={go} setSelectedPerson={setSelectedPerson} />}
          {screen === "path" && <PathFinder go={go} />}
          {screen === "search" && <SearchScreen go={go} />}
          {screen === "empty" && <EmptyStates go={go} permissionDenied={permissionDenied} />}
          {screen === "settings" && <Settings go={go} />}
          {screen === "summary" && <DesignSummary go={go} />}
          {relationshipSaved && <Toast onClose={() => setRelationshipSaved(false)} />}
        </main>
        {["dashboard", "people", "graph", "summary"].includes(screen) && <BottomNav screen={screen} go={go} />}
      </div>
    </div>
  );
}

function Header({ screen, go }) {
  const innerScreens = ["profile", "add", "smart", "path", "search", "empty", "settings", "summary"];
  return (
    <header className="app-header">
      <div className="brand" onClick={() => go("dashboard")} role="button" tabIndex={0}>
        {innerScreens.includes(screen) && (
          <button className="icon-button compact" onClick={(event) => { event.stopPropagation(); go("dashboard"); }} aria-label="Back to dashboard">
            <ArrowLeft size={22} />
          </button>
        )}
        <Graph size={34} weight="duotone" />
        <div>
          <strong>PeopleGraph</strong>
          <span><LockKey size={13} weight="fill" /> Private - Local only</span>
        </div>
      </div>
      <div className="header-actions">
        <button className="icon-button" onClick={() => go("search")} aria-label="Search">
          <MagnifyingGlass size={24} />
        </button>
        <button className="icon-button" onClick={() => go("settings")} aria-label="Settings">
          <GearSix size={24} />
        </button>
      </div>
    </header>
  );
}

function Onboarding({ go }) {
  return (
    <section className="onboarding">
      <div className="hero-mark">
        <Graph size={64} weight="duotone" />
      </div>
      <p className="eyebrow">Private relationship intelligence</p>
      <h1>Your contacts are not just names. They are a network.</h1>
      <p>
        Turn selected contacts into a private graph of family, legal, work, real-estate,
        and trusted connections.
      </p>
      <div className="promise-list">
        <Promise icon={ShieldCheck} title="You own the graph" text="Nothing is shared without consent." />
        <Promise icon={ListChecks} title="Import is opt-in" text="Review every contact before adding." />
        <Promise icon={Eye} title="No creepy inference" text="Relationships wait for your confirmation." />
      </div>
      <button className="primary-button" onClick={() => go("privacy")}>Start mapping my network</button>
      <button className="secondary-button" onClick={() => go("add")}>Add manually</button>
    </section>
  );
}

function Privacy({ go }) {
  return (
    <section className="flow-screen">
      <p className="eyebrow">Before import</p>
      <h2>Choose what becomes part of your graph.</h2>
      <div className="policy-stack">
        <Policy icon={ShieldCheck} title="Contacts stay private" text="This prototype simulates import. In production, your graph can stay local-first." />
        <Policy icon={ListChecks} title="You select contacts first" text="Import never means every contact becomes a node automatically." />
        <Policy icon={Link} title="Relationships need review" text="Each edge has type, direction, strength, note, and confidence." />
      </div>
      <button className="primary-button" onClick={() => go("permission")}>Import Contacts</button>
      <button className="secondary-button" onClick={() => go("add")}>Add manually</button>
    </section>
  );
}

function Permission({ go, setPermissionDenied }) {
  return (
    <section className="permission-card">
      <AddressBook size={44} weight="duotone" />
      <h2>Allow access to contacts?</h2>
      <p>PeopleGraph wants to show a simulated review list so you can choose who becomes part of your private graph.</p>
      <button className="primary-button" onClick={() => { setPermissionDenied(false); go("import"); }}>Allow</button>
      <button className="secondary-button" onClick={() => { setPermissionDenied(true); go("permissionDenied"); }}>Not now</button>
    </section>
  );
}

function PermissionDenied({ go }) {
  return (
    <section className="empty-wrap">
      <CloudSlash size={54} weight="duotone" />
      <h2>No contacts imported</h2>
      <p>You can still add people manually, or come back to import when you are ready.</p>
      <button className="primary-button" onClick={() => go("add")}>Add a person manually</button>
      <button className="secondary-button" onClick={() => go("permission")}>Try import again</button>
    </section>
  );
}

function ImportReview({ go, selectedContacts, setSelectedContacts, toggleContact }) {
  return (
    <section className="stack-screen">
      <div className="screen-title">
        <div>
          <p className="eyebrow">Review import</p>
          <h2>Select contacts to include</h2>
        </div>
        <span className="count-pill">{selectedContacts.size} selected</span>
      </div>
      <div className="search-box">
        <MagnifyingGlass size={20} />
        <span>Search imported contacts</span>
      </div>
      <div className="toolbar-row">
        {["All", "With Phone", "With Email", "Possible Duplicates", "Recently Added"].map((item) => (
          <span className="chip" key={item}>{item}</span>
        ))}
      </div>
      <div className="split-actions">
        <button onClick={() => setSelectedContacts(new Set(importContacts.map((person) => person.id)))}>Select all</button>
        <button onClick={() => setSelectedContacts(new Set())}>Deselect all</button>
      </div>
      <div className="contact-review-list">
        {importContacts.slice(0, 13).map((person) => (
          <label className="review-row" key={person.id}>
            <input checked={selectedContacts.has(person.id)} onChange={() => toggleContact(person.id)} type="checkbox" />
            <Avatar person={person} />
            <div>
              <strong>{person.name}</strong>
              <span>{person.phone} - {person.email}</span>
              <small>{person.profession}, {person.city}</small>
            </div>
          </label>
        ))}
      </div>
      <button className="primary-button sticky-action" onClick={() => go("cleanup")}>Create my graph</button>
    </section>
  );
}

function Cleanup({ go }) {
  return (
    <section className="stack-screen">
      <p className="eyebrow">Cleanup</p>
      <h2>Possible duplicates found</h2>
      <p className="muted">Merge obvious duplicates now, or skip and handle them later.</p>
      <div className="merge-card">
        <div className="merge-pair">
          <MiniContact initials="AS" name="Amit Sharma" detail="+91 98765 10003" />
          <MiniContact initials="AS" name="Amit S." detail="amit@sample.com" />
        </div>
        <div className="merge-actions">
          <button className="primary-button small" onClick={() => go("dashboard")}>Merge</button>
          <button className="secondary-button small" onClick={() => go("dashboard")}>Skip</button>
        </div>
      </div>
      <div className="merge-card">
        <div className="merge-pair">
          <MiniContact initials="SM" name="Senior Advocate Mehra" detail="Delhi High Court" />
          <MiniContact initials="SM" name="S. Mehra" detail="Senior Counsel" />
        </div>
        <div className="merge-actions">
          <button className="primary-button small" onClick={() => go("dashboard")}>Merge</button>
          <button className="secondary-button small" onClick={() => go("dashboard")}>Skip</button>
        </div>
      </div>
      <button className="primary-button" onClick={() => go("dashboard")}>Continue</button>
    </section>
  );
}

function Dashboard({ go, filter, setFilter, setSelectedPerson }) {
  return (
    <section className="dashboard">
      <div className="stats-grid">
        <Stat icon={UsersThree} value="128" label="People" />
        <Stat icon={Graph} value="236" label="Relationships" />
        <Stat icon={Link} value="12" label="Groups" />
        <Stat icon={ShieldCheck} value="18" label="High Trust" />
      </div>
      <GraphCard go={go} setSelectedPerson={setSelectedPerson} />
      <div className="quick-actions">
        <Action icon={Plus} title="Add relationship" text="Connect people" onClick={() => go("add")} />
        <Action icon={Path} title="Find path" text="Between people" onClick={() => go("path")} />
        <Action icon={CirclesThreePlus} title="View graph" text="Explore all" onClick={() => go("graph")} />
      </div>
      <FilterChips filter={filter} setFilter={setFilter} />
      <div className="section-header">
        <h3>Recent relationships</h3>
        <button onClick={() => go("people")}>View all <CaretRight size={18} /></button>
      </div>
      <RelationshipList setSelectedPerson={setSelectedPerson} go={go} />
    </section>
  );
}

function GraphCard({ go, setSelectedPerson }) {
  const nodes = [
    { id: "rohit", x: 17, y: 35, label: "Rohit Verma", edge: "Business Partner" },
    { id: "sk", x: 78, y: 39, label: "Advocate S. K. Sharma", edge: "Legal Advisor" },
    { id: "priya", x: 25, y: 73, label: "Priya Singh", edge: "Team Lead" },
    { id: "manoj", x: 76, y: 73, label: "Manoj Yadav", edge: "Client" },
    { id: "me", x: 50, y: 17, label: "Vinay Gupta", edge: "Mentor" },
  ];
  return (
    <div className="graph-card">
      <button className="expand-button" onClick={() => go("graph")}><Graph size={18} /> Expand</button>
      <div className="graph-stage">
        <div className="hub-node"><User size={28} />Me</div>
        {nodes.map((node) => (
          <button
            className={`graph-node ${initialsColor(node.id)}`}
            key={node.id}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onClick={() => {
              setSelectedPerson(node.id);
              go("profile");
            }}
          >
            <span>{personById(node.id)?.initials}</span>
            <small>{node.label}</small>
            <em>{node.edge}</em>
          </button>
        ))}
        <span className="edge e1" />
        <span className="edge e2" />
        <span className="edge e3" />
        <span className="edge e4" />
        <span className="edge e5" />
        <span className="edge dashed" />
      </div>
      <div className="legend"><span /> Strong <span className="dash" /> Indirect</div>
    </div>
  );
}

function RelationshipList({ setSelectedPerson, go }) {
  const recent = [
    ["me", "Mentor", "High Trust", "Today, 11:20 AM"],
    ["sk", "Legal Advisor", "High Trust", "Yesterday, 6:45 PM"],
    ["rohit", "Business Partner", "High Trust", "Yesterday, 4:10 PM"],
    ["manoj", "Client", "Medium Trust", "2 days ago"],
    ["priya", "Team Lead", "High Trust", "3 days ago"],
  ];
  return (
    <div className="relationship-list">
      {recent.map(([id, label, trust, time]) => {
        const person = personById(id);
        return (
          <button key={id} className="relationship-row" onClick={() => { setSelectedPerson(id); go("profile"); }}>
            <Avatar person={person} />
            <span><strong>{person.name}</strong><small>{label}</small></span>
            <b className={trust === "High Trust" ? "trust high" : "trust medium"}>{trust}</b>
            <em>{time}</em>
            <CaretRight size={18} />
          </button>
        );
      })}
    </div>
  );
}

function PeopleList({ go, query, setQuery, filter, setFilter, visiblePeople, setSelectedPerson }) {
  return (
    <section className="stack-screen">
      <div className="screen-title">
        <div>
          <p className="eyebrow">People</p>
          <h2>{visiblePeople.length} graph nodes</h2>
        </div>
        <button className="icon-button" onClick={() => go("add")} aria-label="Add relationship"><Plus size={24} /></button>
      </div>
      <div className="search-field">
        <MagnifyingGlass size={20} />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search people, city, profession" />
        <SlidersHorizontal size={20} />
      </div>
      <FilterChips filter={filter} setFilter={setFilter} />
      <div className="people-list">
        {visiblePeople.map((person) => (
          <button className="person-card" key={person.id} onClick={() => { setSelectedPerson(person.id); go("profile"); }}>
            <Avatar person={person} />
            <span>
              <strong>{person.name}</strong>
              <small>{person.phone} - {person.email}</small>
              <em>{person.profession} - {person.city}</em>
              <i>{person.tags.slice(0, 3).join("  ")}</i>
            </span>
            <b>{person.connections}</b>
          </button>
        ))}
      </div>
    </section>
  );
}

function PersonProfile({ person, go }) {
  const related = relationships.filter((rel) => rel.from === person.id || rel.to === person.id);
  return (
    <section className="profile-screen">
      <div className="profile-hero">
        <Avatar person={person} large />
        <h2>{person.name}</h2>
        <p>{person.profession}</p>
        <span><MapPin size={16} /> {person.city} - {person.organization}</span>
      </div>
      <div className="profile-actions">
        <button className="primary-button small" onClick={() => go("add")}><Plus size={18} /> Add Relationship</button>
        <button className="secondary-button small" onClick={() => go("graph")}><Graph size={18} /> View in Graph</button>
      </div>
      <div className="detail-panel">
        <Info label="Phone" value={person.phone} />
        <Info label="Email" value={person.email} />
        <Info label="Trust" value={person.trust} />
        <Info label="Source" value={person.source} />
      </div>
      <div className="tag-row">{person.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <section className="profile-section">
        <h3>Relationships</h3>
        {related.map((rel) => {
          const other = personById(rel.from === person.id ? rel.to : rel.from);
          return <RelationshipDetail key={`${rel.from}-${rel.to}-${rel.type}`} rel={rel} other={other} />;
        })}
      </section>
      <section className="profile-section">
        <h3>Interaction history</h3>
        <div className="history-item"><CalendarBlank size={18} /> Last contacted: {person.lastContacted}</div>
        <div className="history-item"><NotePencil size={18} /> Notes: Discussed legal network context and future follow-up.</div>
      </section>
    </section>
  );
}

function AddRelationship({ go, setRelationshipSaved }) {
  return (
    <section className="form-screen">
      <p className="eyebrow">Add relationship</p>
      <h2>Connect two people</h2>
      <button className="nl-entry" onClick={() => go("smart")}><Sparkle size={20} /> Try smart relationship entry</button>
      <Field label="Person A" value="Vinay Gupta" />
      <Field label="Person B" value="Advocate S. K. Sharma" />
      <Field label="Relationship type" value="legal advisor" />
      <Segment label="Strength" options={["Weak", "Normal", "Strong", "Trusted"]} selected="Strong" />
      <Segment label="Direction" options={["One-way", "Two-way"]} selected="Two-way" />
      <Field label="Context note" value="Consulted for Delhi High Court matters" multiline />
      <Segment label="Confidence" options={["Confirmed", "Inferred", "Unverified"]} selected="Confirmed" />
      <button className="primary-button" onClick={() => { setRelationshipSaved(true); go("dashboard"); }}>Save Relationship</button>
    </section>
  );
}

function SmartEntry({ go, setRelationshipSaved }) {
  return (
    <section className="form-screen">
      <p className="eyebrow">Smart entry</p>
      <h2>Describe the relationship</h2>
      <div className="smart-input"><Sparkle size={20} /> Advocate Sharma was introduced by Rohit <X size={18} /></div>
      <p className="muted">PeopleGraph parses this as a preview only. You confirm before it is saved.</p>
      <div className="preview-edge">
        <MiniContact initials="RV" name="Rohit Verma" detail="Node A" />
        <div className="preview-line">introduced</div>
        <MiniContact initials="SK" name="Advocate S. K. Sharma" detail="Node B" />
      </div>
      <Field label="Relationship edge" value="introduced by" />
      <Segment label="Confidence" options={["Confirmed", "Inferred", "Unverified"]} selected="Confirmed" />
      <Field label="Context note" value="Rohit introduced Advocate Sharma during a legal consultation." multiline />
      <div className="privacy-note"><ShieldCheck size={22} /> You are in control. We do not infer or add relationships automatically.</div>
      <button className="primary-button" onClick={() => { setRelationshipSaved(true); go("graph"); }}>Confirm and save</button>
    </section>
  );
}

function GraphView({ go, setSelectedPerson }) {
  return (
    <section className="graph-screen">
      <div className="screen-title">
        <div>
          <p className="eyebrow">Graph view</p>
          <h2>Your private network</h2>
        </div>
        <button className="secondary-button tiny" onClick={() => go("path")}>Find path</button>
      </div>
      <div className="toolbar-row">
        {["Family", "Legal", "Work", "Real Estate", "College", "High Trust"].map((item) => <span className="chip active-soft" key={item}>{item}</span>)}
      </div>
      <div className="large-graph">
        {people.slice(0, 14).map((person, index) => (
          <button
            key={person.id}
            className={`orbit-node ${initialsColor(person.id)}`}
            style={{ "--i": index, "--count": 14 }}
            onClick={() => { setSelectedPerson(person.id); go("profile"); }}
          >
            {person.initials}
          </button>
        ))}
        <button className="orbit-center" onClick={() => go("profile")}>Me</button>
      </div>
      <div className="edge-details">
        <h3>Selected edge</h3>
        <p>Rohit Verma {"->"} Advocate S. K. Sharma</p>
        <span>junior of - Strong - Confirmed</span>
      </div>
    </section>
  );
}

function PathFinder({ go }) {
  return (
    <section className="path-screen">
      <p className="eyebrow">Path finder</p>
      <h2>Find trusted paths across your graph.</h2>
      <div className="path-form">
        <Field label="From person" value="Me" />
        <Field label="To person" value="Senior Advocate Mehra" />
        <button className="primary-button"><MagnifyingGlass size={20} /> Find path</button>
      </div>
      <div className="path-result">
        <div className="section-header compact">
          <h3>Best path found</h3>
          <span className="trust high">High confidence</span>
        </div>
        <div className="path-chain">
          {["Me", "Rohit Verma", "Advocate S. K. Sharma", "Senior Advocate Mehra"].map((name, index) => (
            <span key={name}>{name}{index < 3 && <b>{["friend", "junior of", "works with"][index]}</b>}</span>
          ))}
        </div>
        <div className="score-grid">
          <Stat icon={ShieldCheck} value="92%" label="Confidence" />
          <Stat icon={Link} value="Strong" label="Path strength" />
          <Stat icon={UsersThree} value="2" label="Degrees" />
        </div>
        <p>You know Rohit well. He is a junior of Advocate S. K. Sharma, who works with Senior Advocate Mehra.</p>
      </div>
      <button className="secondary-button" onClick={() => go("search")}>Search similar paths</button>
    </section>
  );
}

function SearchScreen({ go }) {
  const examples = ["lawyers in Delhi", "people connected to Amit", "who introduced me to Rajesh?", "family contacts in Banda", "second-degree legal contacts"];
  return (
    <section className="stack-screen">
      <p className="eyebrow">Search</p>
      <h2>Ask your graph</h2>
      <div className="search-field active"><MagnifyingGlass size={20} /><input defaultValue="lawyers in Delhi" /><FunnelSimple size={20} /></div>
      <div className="example-grid">
        {examples.map((item) => <button key={item}>{item}</button>)}
      </div>
      <div className="people-list">
        {[personById("sk"), personById("rohit"), personById("mehra"), personById("seema")].map((person) => (
          <button className="person-card" key={person.id} onClick={() => go("profile")}>
            <Avatar person={person} />
            <span><strong>{person.name}</strong><small>{person.profession} - {person.city}</small><em>Path: Me {"->"} Amit/Rohit {"->"} {person.name}</em></span>
            <CaretRight size={18} />
          </button>
        ))}
      </div>
    </section>
  );
}

function EmptyStates({ go, permissionDenied }) {
  const states = [
    ["No contacts imported", permissionDenied ? "Import was declined. Manual entry still works." : "Start with a small, curated import."],
    ["No relationships added", "Create one confirmed edge to make the graph useful."],
    ["No path found", "Try a broader query or add one bridge relationship."],
    ["Duplicate not found", "Your cleanup queue is clear."],
    ["Permission denied", "PeopleGraph will not access contacts unless you allow it."],
  ];
  return (
    <section className="stack-screen">
      <p className="eyebrow">Empty states</p>
      <h2>Prototype edge cases</h2>
      {states.map(([title, text]) => <Policy key={title} icon={CloudSlash} title={title} text={text} />)}
      <button className="primary-button" onClick={() => go("dashboard")}>Back to dashboard</button>
    </section>
  );
}

function Settings({ go }) {
  const items = [
    [DownloadSimple, "Export data", "Download your people and relationship graph."],
    [Trash, "Delete all data", "Remove all local graph data."],
    [AddressBook, "Manage imported contacts", "Review included and skipped contacts."],
    [CloudSlash, "Revoke contact sync", "Stop future imports."],
    [LockKey, "Local-only mode", "Keep graph data on this device."],
    [ArrowClockwise, "Cloud sync placeholder", "Future encrypted sync option."],
  ];
  return (
    <section className="stack-screen">
      <p className="eyebrow">Privacy settings</p>
      <h2>Your data belongs to you.</h2>
      <p className="muted">PeopleGraph is designed around consent, confirmation, and exportability.</p>
      <div className="settings-list">
        {items.map(([Icon, title, text]) => <Policy key={title} icon={Icon} title={title} text={text} />)}
      </div>
      <button className="secondary-button" onClick={() => go("empty")}>View empty states</button>
    </section>
  );
}

function DesignSummary({ go }) {
  return (
    <section className="summary-screen">
      <p className="eyebrow">MVP design summary</p>
      <h2>PeopleGraph turns curated contacts into private relationship memory.</h2>
      <SummaryBlock title="Personas" items={["Relationship-heavy professionals", "Lawyers and law students", "Founders, consultants, salespeople, recruiters", "Real-estate operators and local network builders"]} />
      <SummaryBlock title="Journey" items={["Explain privacy promise", "Simulate contact permission", "Review and clean imported contacts", "Map relationships with confidence", "Search graph and find trusted paths"]} />
      <SummaryBlock title="Information architecture" items={["Onboarding and permission", "Import review and duplicate cleanup", "Dashboard, People, Profiles, Graph", "Relationship builder, Smart entry, Path finder", "Search, Empty states, Settings"]} />
      <SummaryBlock title="Component list" items={["Stats, filter chips, grouped lists, node graph, profile rows", "Relationship form controls, confidence segments, path chain", "Privacy notes, empty states, settings rows"]} />
      <SummaryBlock title="MVP scope" items={["Simulated import only", "25 sample contacts", "Relationship edge creation", "Path example and search examples", "No real mobile permissions or backend sync"]} />
      <SummaryBlock title="Risks and assumptions" items={["Users need plain-language relationship types", "Graph must be useful with 20 contacts", "Privacy copy must stay visible but not heavy", "Natural-language parsing must always ask for confirmation"]} />
      <SummaryBlock title="Future roadmap" items={["Encrypted sync", "Calendar/email context import", "Relationship reminders", "Team-safe sharing", "Deduping and contact freshness scoring"]} />
      <button className="primary-button" onClick={() => go("dashboard")}>Return to prototype</button>
    </section>
  );
}

function BottomNav({ screen, go }) {
  return (
    <nav className="bottom-nav">
      {navItems.map(({ id, label, icon: Icon }) => (
        <button key={id} className={screen === id ? "active" : ""} onClick={() => go(id)}>
          <Icon size={25} weight={screen === id ? "duotone" : "regular"} />
          {label}
        </button>
      ))}
    </nav>
  );
}

function FilterChips({ filter, setFilter }) {
  return (
    <div className="filter-chips">
      {filters.map((item) => (
        <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>
          {item === "Family" && <House size={18} />}
          {item === "Legal" && <Buildings size={18} />}
          {item === "Work" && <ClipboardText size={18} />}
          {item === "High Trust" && <ShieldCheck size={18} />}
          {item}
        </button>
      ))}
    </div>
  );
}

function Stat({ icon: Icon, value, label }) {
  return <div className="stat-card"><Icon size={29} weight="duotone" /><strong>{value}</strong><span>{label}</span></div>;
}

function Action({ icon: Icon, title, text, onClick }) {
  return <button className="action-tile" onClick={onClick}><Icon size={34} /><span><strong>{title}</strong><small>{text}</small></span></button>;
}

function Avatar({ person, large = false }) {
  return <span className={`avatar ${large ? "large" : ""} ${initialsColor(person.id)}`}>{person.initials}</span>;
}

function Promise({ icon: Icon, title, text }) {
  return <div className="promise"><Icon size={24} weight="duotone" /><span><strong>{title}</strong><small>{text}</small></span></div>;
}

function Policy({ icon: Icon, title, text }) {
  return <div className="policy"><Icon size={26} weight="duotone" /><span><strong>{title}</strong><small>{text}</small></span><CaretRight size={18} /></div>;
}

function MiniContact({ initials, name, detail }) {
  return <div className="mini-contact"><span>{initials}</span><strong>{name}</strong><small>{detail}</small></div>;
}

function Field({ label, value, multiline = false }) {
  return <label className={`field ${multiline ? "multiline" : ""}`}><span>{label}</span><b>{value}</b></label>;
}

function Segment({ label, options, selected }) {
  return (
    <div className="segment-wrap">
      <span>{label}</span>
      <div className="segment">
        {options.map((option) => <button className={option === selected ? "active" : ""} key={option}>{option}</button>)}
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return <div className="info"><span>{label}</span><strong>{value}</strong></div>;
}

function RelationshipDetail({ rel, other }) {
  return (
    <div className="rel-detail">
      <Avatar person={other} />
      <span><strong>{rel.type}</strong><small>{other.name}</small></span>
      <b>{rel.strength}</b>
      <em>{rel.confidence}</em>
    </div>
  );
}

function SummaryBlock({ title, items }) {
  return (
    <section className="summary-block">
      <h3>{title}</h3>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}

function Toast({ onClose }) {
  return (
    <div className="toast">
      <Check size={18} weight="bold" />
      Relationship saved to your private graph.
      <button onClick={onClose}><X size={16} /></button>
    </div>
  );
}
