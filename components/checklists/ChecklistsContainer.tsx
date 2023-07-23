'use client'

import { useCallback, useEffect, useState } from 'react';

import { styles } from '@/components/styles';
import { checkList } from '@/lib/api';

import SectionWrapper from '../hoc/SectionWrapper';
import ChecklistItem from './ChecklistItem';
import NewChecklist from './NewChecklist';
import AuthenticatedComponent from '../checklists/AuthenticatedComponent';

type Checklist = {
  id: string;
  title: string;
  complete: boolean;
};

const ChecklistsContainer = () => {
  const [checklists, setChecklists] = useState<Checklist[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const data = await checkList();
      setChecklists(data);
    } catch (error) {
      console.error('Error fetching checklist:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
    setIsAuthorized(true);
  }, [fetchData]);

  const handleTogglePrivacy = () => {
    setIsPublic((prevState) => !prevState);
  };

  return (
    <>
      <div className="grid grid-cols-1 place-items-center">
        <h1 className="text-2xl ">Checklisty</h1>
        <div>
          <AuthenticatedComponent isAuthorized={isAuthorized} isPublic={isPublic} onTogglePrivacy={handleTogglePrivacy} />        
          <button className={`${styles['buttonsMain']} `}>MY</button>
          <button className={`${styles['buttonsMain']} `}>NEW</button>
        </div>
        <NewChecklist fetchData={fetchData} />
        <div>
          <ul className="pl-4">
            {checklists.map((checklist) => (
              <ChecklistItem
              key={checklist.id}
              id={checklist.id}
              title={checklist.title}
              complete={checklist.complete}
              fetchData={fetchData}
              isAuthorized={isAuthorized}
            />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChecklistsContainer;



