import type { CoursePart } from './types';
import assertNever from './utils';

const App = () => {
  const courseName = 'Half Stack application development';
  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is an awesome course part',
      kind: 'basic',
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: 'group',
    },
    {
      name: 'Basics of type Narrowing',
      exerciseCount: 7,
      description: 'How to go from unknown to string',
      kind: 'basic',
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      backgroundMaterial:
        'https://type-level-typescript.com/template-literal-types',
      kind: 'background',
    },
    {
      name: 'TypeScript in frontend',
      exerciseCount: 10,
      description: 'a hard part',
      kind: 'basic',
    },
    {
      name: 'Backend development',
      exerciseCount: 21,
      description: 'Typing the backend',
      requirements: ['nodejs', 'jest'],
      kind: 'special',
    },
  ];

  const totalExercises = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0,
  );

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total totalExercises={totalExercises} />
    </div>
  );
};

export default App;

const Header = ({ name }: { name: string }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }: { parts: CoursePart[] }) => {
  return (
    <div>
      {parts.map((part) => (
        <PartItem key={part.name} part={part} />
      ))}
    </div>
  );
};

const PartItem = ({ part }: { part: CoursePart }) => {
  switch (part.kind) {
    case 'basic': {
      return (
        <div>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <div>
            <em>{part.description}</em>
          </div>
        </div>
      );
    }
    case 'group': {
      return (
        <div>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <div>project exercises {part.groupProjectCount}</div>
        </div>
      );
    }
    case 'background': {
      return (
        <div>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <div>
            <em>{part.description}</em>
          </div>
          <div>submit to {part.backgroundMaterial}</div>
        </div>
      );
    }
    case 'special': {
      return (
        <div>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <div>
            <em>{part.description}</em>
          </div>
          <div>required skils: {part.requirements.join(', ')}</div>
        </div>
      );
    }
    default: {
      return assertNever(part);
    }
  }
};

const Total = ({ totalExercises }: { totalExercises: number }) => {
  return <p>Number of exercises {totalExercises}</p>;
};
