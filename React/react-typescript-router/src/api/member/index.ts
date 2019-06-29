import { members } from './mockData';
import { MemberEntity } from '../../model';

const FetchMembers = ():Promise<MemberEntity[]> =>{
  return Promise.resolve(members);
}
export const memberAPI = {
  FetchMembers
}