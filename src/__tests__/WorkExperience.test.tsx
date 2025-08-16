import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkExperience from '../pages/WorkExperience';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../components/Banner', () => () => <div data-testid="banner-mock" />);

// Mock the Experience component as it's a dependency and we want to test the WorkExperience page's rendering of it
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
    expect(experienceEntries).toHaveLength(7);
  });

  test('displays the correct data for each experience entry', async () => {
    render(
      <MemoryRouter>
        <WorkExperience />
      </MemoryRouter>
    );

    expect(await screen.findByText('Avalanche Studios Group')).toBeInTheDocument();
    expect(await screen.findByText('Senior Backend Engineer')).toBeInTheDocument();
    expect(await screen.findByText('Jan 2025 – Present')).toBeInTheDocument();

    expect((await screen.findAllByText('Ringtail Lemur')).length).toBeGreaterThan(0);
    expect((await screen.findAllByText('Senior Software Engineer')).length).toBeGreaterThan(0);
    expect(await screen.findByText('Aug 2023 – Dec 2024')).toBeInTheDocument();
  });
});