// import styles from './layout/module.css'

export default function Layout({ children }) {
  return (
    <div className="container max-w-xl px-4 mt-12 mx-auto mb-24">
      {children}
    </div>
  )
}