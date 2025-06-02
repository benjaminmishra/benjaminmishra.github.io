import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkExperience from '../pages/WorkExperience';
import { MemoryRouter } from 'react-router-dom';

// Mock the Experience component as it's a dependency and we want to test the WorkExperience page's rendering of it
jest.mock('../components/expereince', () => {
  return ({ experiences }: { experiences: any[] }) => (
    <div data-testid="experience-component">
      {experiences.map((exp, index) => (
        <div key={index} data-testid={`experience-entry-${index}`}>
          <div data-testid={`experience-company-${index}`}>{exp.company}</div>
          <div data-testid={`experience-title-${index}`}>{exp.title}</div>
          <div data-testid={`experience-duration-${index}`}>{exp.duration}</div>
          {/* In a real scenario, you'd mock ExperienceEntry more comprehensively,
              but for this test, we'll check the data passed down. */}
        </div>
      ))}
    </div>
  );
});

describe('WorkExperience Page', () => {
  test('renders the correct number of experience entries', () => {
    render(
      <MemoryRouter>
        <WorkExperience />
      </MemoryRouter>
    );

    // Assuming you have a way to determine the number of work experiences.
    // You might need to import the actual workExperiences data or mock it.
    // For this example, let's assume the mock Experience component above
    // receives the data correctly and renders a div for each.
    // You would replace '3' with the actual number of experiences in your data.
    const experienceEntries = screen.getAllByTestId(/experience-entry-/i);
    expect(experienceEntries).toHaveLength(3); // Replace 3 with the actual number of experiences
  });

  test('displays the correct data for each experience entry', () => {
    render(
      <MemoryRouter>
        <WorkExperience />
      </MemoryRouter>
    );

    // Assuming your mock Experience component renders divs with data-testid
    // based on the data passed to it.
    // You would need to know the expected data for the first few entries.
    // Replace with actual expected data from your workExperiences source.
    expect(screen.getByTestId('experience-company-0')).toHaveTextContent('Company A');
    expect(screen.getByTestId('experience-title-0')).toHaveTextContent('Title A');
    expect(screen.getByTestId('experience-duration-0')).toHaveTextContent('Duration A');

    expect(screen.getByTestId('experience-company-1')).toHaveTextContent('Company B');
    expect(screen.getByTestId('experience-title-1')).toHaveTextContent('Title B');
    expect(screen.getByTestId('experience-duration-1')).toHaveTextContent('Duration B');

    // Add more assertions for other entries as needed
  });
});