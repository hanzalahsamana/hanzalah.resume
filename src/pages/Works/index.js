import React, { useState } from 'react';
import { projects } from './data';
import Title from "../common/Title";
import WorkItem from "./Item";
import WorksMenu from "./Menu";
import './index.scss';

const initalState = projects.filter(p => p.type === 'angular');

const Works = () => {
    const [selectedProjects, setSelectedProjects] = useState(initalState);
    const [selectedType, setSelectedType] = useState('angular');

    function handleMenuChange(type) {
        setSelectedProjects(projects.filter(p => p.type === type));
        setSelectedType(type);
    }
    return (
        <div className="page" id="works">
            <Title>
                Works - Talk is cheap show me the code!
            </Title>
            <WorksMenu
                items={[
                    'angular',
                    'react',
                    'react-native',
                    'ionic'
                ]}
                selected={selectedType}
                clicked={handleMenuChange}
            />
            <div className="row">
                {
                    selectedProjects.map(
                        item => <div className="column project-card" key={item.sourceCodeLink}>
                            <WorkItem
                                {...item}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Works;
