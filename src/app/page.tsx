import { redirect } from 'next/navigation';

export default function Home() {
  // 重定向到Mining farm页面
  redirect('/nft-miners');
}
