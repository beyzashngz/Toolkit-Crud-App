import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  tasks: [
    {
      title: 'Navbar',
      author: 'Ali',
      assigned_to: 'Ahmet',
      end_date: '1212-12-12',
      id: '400840aa-e73e-4544-aa64-93827b4a7e82',
    },
    {
      title: 'Footer',
      author: 'Ayşe',
      assigned_to: 'Fatma',
      end_date: '3233-02-23',
      id: '0789a975-c4ac-43ac-af5d-42f17b708911',
    },
    {
      title: 'Home',
      author: 'Ahmet',
      assigned_to: 'Ali',
      end_date: '1243-12-12',
      id: '2777f9cd-6407-4584-9dcb-b1d6abd0835a',
    },
  ],
};


const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    // YENİ GÖREV EKLE
    addTask: (state, { payload }) => {
      // a- göreve id ekle
      payload.id = v4();

      // b- görevi statedeki tasks dizisine ekle
      state.tasks.push(payload);
    },

    // GÖREVİ SİL
    deleteTask: (state, { payload }) => {
      // a- silinecek elemanın dizideki sırasını bul
      const index = state.tasks.findIndex((i) => i.id === payload);

      // b- elemanı sil
      state.tasks.splice(index, 1);
    },

    // GÖREVİ DÜZENLE
    editTask: (state, { payload }) => {
      // düzenlenecek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === payload.id);

      // dizideki elemanı güncelle
      state.tasks.splice(index, 1, payload);
    },
  },
});

// storea tanıtmak için eport
export default crudSlice.reducer;

// projede kullanabilmek için aksiyonları export
export const { addTask, deleteTask, editTask } = crudSlice.actions;