import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { RepositoryStyle } from './style';
import { RepositoryModel } from '../../models/Repository.model';

const Repository: React.FC<RepositoryModel> = ({ full_name, owner, description }) => (
    <RepositoryStyle>
        <Link className={RepositoryStyle} 
            key={full_name} 
            to={`/repositories/${full_name}`}>

            <img src={owner.avatar_url} alt={owner.login} />
            <div>
                <h3>{full_name}</h3>
                <p>{description}</p>
            </div>

            <FiChevronRight />
        </Link>
    </RepositoryStyle>
);
export default Repository;