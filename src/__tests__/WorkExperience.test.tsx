import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkExperience from '../pages/WorkExperience';
import { MemoryRouter } from 'react-router-dom';
import { workExperiences } from '../pages/workExperiences';

jest.mock('../components/Banner', () => () => <div data-testid="banner-mock" />);

// Mock ExperienceEntry so tests stay focused on WorkExperience data wiring.
jest.mock('../components/ExperienceEntry', () => ({ experience }: { experience: any }) => (
  <div data-testid="experience-entry">
    <div>{experience.company}</div>
    <div>{experience.title}</div>
    <div>{experience.duration}</div>
  </div>
));

describe('WorkExperience Page', () => {
  test('renders the correct number of experience entries', async () => {
    render(
      <MemoryRouter>
        <WorkExperience />
      </MemoryRouter>
    );

    const experienceEntries = await screen.findAllByTestId('experience-entry');
    expect(experienceEntries).toHaveLength(workExperiences.length);
  });

  test('displays the correct data for each experience entry', async () => {
    render(
      <MemoryRouter>
        <WorkExperience />
      </MemoryRouter>
    );

    for (const experience of workExperiences) {
      expect(await screen.findByText(experience.company)).toBeInTheDocument();
      expect((await screen.findAllByText(experience.title)).length).toBeGreaterThan(0);
      expect(await screen.findByText(experience.duration)).toBeInTheDocument();
    }
  });
});
