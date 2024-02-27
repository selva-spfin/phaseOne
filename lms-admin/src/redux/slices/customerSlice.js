import { createSlice } from '@reduxjs/toolkit';

const mockData = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    companyName: 'ABC Corp',
    mobileNo: '123-456-7890',
    salary: '$50,000',
    AAdhar: '1234-5678-9012',
    avatar: 'https://example.com/avatar1.jpg', // URL to the avatar image
    createdAt: new Date(), // Date object representing the creation date
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    companyName: 'XYZ Ltd',
    mobileNo: '987-654-3210',
    salary: '$60,000',
    AAdhar: '9876-5432-1098',
    avatar: 'https://example.com/avatar2.jpg', // URL to the avatar image
    createdAt: new Date(), // Date object representing the creation date
  },
  // Add more sample customer objects as needed
];


const initialState = {
  customerList: mockData,
  selectedCustomer: null,
  loading: false,
  error: null,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomerList: (state, action) => {
      state.customerList = action.payload;
    },
    
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = action.payload;
    },

    // Action to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Action to set error state
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCustomerList,
  setSelectedCustomer,
  setLoading,
  setError,
} = customerSlice.actions;

export const selectCustomerList = (state) => state.customer.customerList;
export const selectSelectedCustomer = (state) => state.customer.selectedCustomer;
export const selectLoading = (state) => state.customer.loading;
export const selectError = (state) => state.customer.error;

export default customerSlice.reducer;
