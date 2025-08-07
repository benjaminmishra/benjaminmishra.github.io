import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkExperience from '../pages/WorkExperience';
import { MemoryRouter } from 'react-router-dom';
import * as articleService from '../services/article.service';

// Mock the Experience component as it's a dependency and we want to test the WorkExperience page's rendering of it
jest.mock('../components/ExperienceEntry', () => {
  return ({ experiences }: { experiences: any[] }) => (
    <div data-testid="experience-component-mock">
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

jest.mock('../services/article.service');

describe('WorkExperience Page', () => {
  beforeEach(() => {
    (articleService.getArticles as jest.Mock).mockResolvedValue({
      items: [
        {
          company: 'Company A',
          title: 'Title A',
          duration: 'Duration A',
        },
        {
          company: 'Company B',
          title: 'Title B',
          duration: 'Duration B',
        },
        {
          company: 'Company C',
          title: 'Title C',
          duration: 'Duration C',
        },
      ],
    });
  });

  test('renders the correct number of experience entries', async () => {
    render(
      <MemoryRouter>
        <WorkExperience />
      </MemoryRouter>
    );

    const experienceEntries = await screen.findAllByTestId(/experience-entry-/i);
    expect(experienceEntries).toHaveLength(3);
  });

  test('displays the correct data for each experience entry', async () => {
    render(
      <MemoryRouter>
        <WorkExperience />
      </MemoryRouter>
    );

    expect(await screen.findByText('Company A')).toBeInTheDocument();
    expect(await screen.findByText('Title A')).toBeInTheDocument();
    expect(await screen.findByText('Duration A')).toBeInTheDocument();

    expect(await screen.findByText('Company B')).toBeInTheDocument();
    expect(await screen.findByText('Title B')).toBeInTheDocument();
    expect(await screen.findByText('Duration B')).toBeInTheDocument();
  });
});