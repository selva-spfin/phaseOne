export const colors = {
    pink:'#E61B4F',
    green:'#3AB45F',
    orange:'#F27F2D',
    blue:'#2B71B9',
    lightBlue:'#2B91D1',
    white:'#FFFFFF',
    black: '#000000',
    gray:'#A9A9A9'
}

type ProfileStatus =
  | 'Pending'
  | 'Approved'
  | 'Decline'
  | 'Processing'
  | 'Hold'
  | 'Active'
  | 'Inactive'
  | 'Process';

export function getProfileStatusColor(status: ProfileStatus): string {
  switch (status) {
    case 'Pending':
      return '#ffcc00';
    case 'Approved':
      return '#00ff00';
    case 'Decline':
      return '#ff0000';
    case 'Processing':
      return '#3366cc';
    case 'Hold':
      return 'red';
    case 'Active':
      return 'green';
    case 'Inactive':
      return '#999999';
    case 'Process':
      return '#663399';
    default:
      return '#000000';
  }
}
