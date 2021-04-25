import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  ProjectWrap,
  ProjectList,
  ProjectItem,
  ProjectColor,
  ProjectItemContent,
  ProjectButtonArea,
  TypeButton,
  FilterButton,
  ProjectSetButton,
  ProjectTitle,
  People,
  ProjectStatus,
  ProJectStarButton,
  StatusArea,
  StatusItem,
  ProjectAlarmCount,
  TypeButtonArea,
  SetButtonArea,
} from './styles';

const ProjectGroup = ({ projects }) => (
  <ProjectWrap>
    <ProjectButtonArea>
      <TypeButtonArea>
        <TypeButton type="button" buttonType="card" active />
        <TypeButton type="button" buttonType="list" />
      </TypeButtonArea>
      <SetButtonArea>
        <FilterButton type="button" active />
        <ProjectSetButton type="button" />
      </SetButtonArea>
    </ProjectButtonArea>
    <div>
      <ProjectTitle>즐겨찾기</ProjectTitle>
      <ProjectList>
        <li>
          <ProjectItem>
            <ProjectColor />
            <ProjectItemContent>
              <ProJectStarButton type="button" active />
              <ProjectTitle>프로젝트 명로젝트 명로젝트 명로젝트 명로젝트 명로젝트 명</ProjectTitle>
              <ProjectStatus>
                <People>878</People>
              </ProjectStatus>
            </ProjectItemContent>
          </ProjectItem>
        </li>
      </ProjectList>
    </div>
    <div>
      <ProjectTitle>참여중</ProjectTitle>
      <ProjectList>
        {projects.map((project, index) => (
          <li key={project.id}>
            <Link href="/posts/[id]" as={`/posts/${project.id}`}>
              <a>
                <ProjectItem>
                  <ProjectColor />
                  <ProjectItemContent>
                    <ProJectStarButton type="button" />
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectStatus>
                      <People>878</People>
                    </ProjectStatus>
                  </ProjectItemContent>
                </ProjectItem>
              </a>
            </Link>
          </li>
        ))}
      </ProjectList>
    </div>
  </ProjectWrap>
);

export { ProjectGroup };
