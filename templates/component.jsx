import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

export default function ComponentName({ className, ...props }) {
  return (
    <div className={cn('', className)} {...props}>
      {/* Component content */}
    </div>
  );
}

ComponentName.propTypes = {
  className: PropTypes.string,
};