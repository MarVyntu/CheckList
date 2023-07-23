import { FormEvent, useState } from 'react';
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createChecklist } from '@/lib/api';
import { styles } from '@/components/styles';

type Checklist = {
  title: string;
  complete: boolean;
};

const NewChecklist = ({ fetchData }) => {
  const initialChecklist = { title: '', complete: false };
  const [newChecklist, setNewChecklist] = useState<Checklist>({ ...initialChecklist });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newChecklist.title.trim() === '') {
      toast.error('The checklist cannot be empty');
      console.error('The checklist cannot be empty');
      return;
    }

    try {
      await createChecklist(newChecklist);
      setNewChecklist({ ...initialChecklist });
      fetchData();
    } catch (error) {
      console.error('Error creating new Checklist:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          className={`${styles['inputsMain']} `}
          type="text"
          name="title"
          value={newChecklist.title}
          placeholder="New Checklist"
          onChange={(e) => setNewChecklist((prev) => ({ ...prev, title: e.target.value }))}
        />
        <div className="flex gap-1 justify-end">
          <button type="submit" className={`${styles['buttonsMain']} `}>
            Create
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1400}
        transition={Slide}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default NewChecklist;
