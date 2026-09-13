import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormWatch, FieldErrors } from 'react-hook-form';
import { BiodataFormValues } from '@/lib/validations';
import { Input } from '../ui/Input';
import { ModernSelect } from '../ui/ModernSelect';
import { HeartHandshake, User, Search, CheckCircle2 } from 'lucide-react';

interface Props {
  register: UseFormRegister<BiodataFormValues>;
  setValue: UseFormSetValue<BiodataFormValues>;
  watch: UseFormWatch<BiodataFormValues>;
  errors: FieldErrors<BiodataFormValues>;
}

export function PersonalDetails({ register, setValue, watch, errors }: Props) {
  const genderValue = watch('gender') || '';
  const maritalStatusValue = watch('maritalStatus') || '';
  const lookingForValue = watch('lookingFor') || '';

  const handleGenderChange = (g: 'Male' | 'Female') => {
    setValue('gender', g, { shouldValidate: true });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
        <div className="w-8 h-8 rounded-xl bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm border border-brand-emerald/20">
          <User size={16} className="text-brand-gold" />
        </div>
        <h3 className="text-base sm:text-lg font-bold font-playfair text-brand-charcoal">
          1. Candidate Details
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <Input 
          label="Full Name" 
          {...register('fullName')} 
          error={errors.fullName?.message} 
          placeholder="Enter your full name" 
        />

        {/* Gender UI */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => handleGenderChange('Male')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
                genderValue === 'Male'
                  ? 'bg-brand-deep-green text-white border-brand-deep-green ring-2 ring-brand-emerald/30 shadow-md shadow-brand-emerald/20'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-brand-emerald/40 hover:bg-slate-100'
              }`}
            >
              <span>Male</span>
              {genderValue === 'Male' && <CheckCircle2 size={14} className="text-white" />}
            </button>
            <button
              type="button"
              onClick={() => handleGenderChange('Female')}
              className={`py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
                genderValue === 'Female'
                  ? 'bg-brand-deep-green text-white border-brand-deep-green ring-2 ring-brand-emerald/30 shadow-md shadow-brand-emerald/20'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-brand-emerald/40 hover:bg-slate-100'
              }`}
            >
              <span>Female</span>
              {genderValue === 'Female' && <CheckCircle2 size={14} className="text-white" />}
            </button>
          </div>
          {errors.gender && (
            <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>
          )}
        </div>

        {/* Looking For */}
        <div>
          <ModernSelect
            label="Looking For"
            icon={<Search size={16} />}
            placeholder="Select Looking For"
            value={lookingForValue.startsWith('Others') ? 'Others (Specify)' : lookingForValue}
            onChange={(val) => setValue('lookingFor', val, { shouldValidate: true })}
            error={errors.lookingFor?.message}
            options={[
              { value: 'Self', label: 'Self' },
              { value: 'Son', label: 'Son' },
              { value: 'Daughter', label: 'Daughter' },
              { value: 'Brother', label: 'Brother' },
              { value: 'Sister', label: 'Sister' },
              { value: 'Others (Specify)', label: 'Others (Specify)' },
            ]}
          />
          {lookingForValue.startsWith('Others') && (
            <div className="mt-2">
              <input
                type="text"
                placeholder="Please specify (e.g. Relative, Friend, Ward)"
                onChange={(e) => setValue('lookingFor', e.target.value ? `Others: ${e.target.value}` : 'Others (Specify)', { shouldValidate: true })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm outline-none focus:border-brand-gold"
              />
            </div>
          )}
        </div>

        {/* Marital Status (Kept) */}
        <ModernSelect
          label="Marital Status"
          icon={<HeartHandshake size={16} />}
          placeholder="Select Status"
          value={maritalStatusValue}
          onChange={(val) => setValue('maritalStatus', val as any, { shouldValidate: true })}
          error={errors.maritalStatus?.message}
          options={[
            { value: 'Never Married', label: 'Never Married' },
            { value: 'Divorced', label: 'Divorced' },
            { value: 'Widowed', label: 'Widowed' },
            { value: 'Separated', label: 'Separated' },
            { value: 'Annulled', label: 'Annulled' },
          ]}
        />

        <Input 
          label="Height (e.g. 5'8&quot;)" 
          {...register('height')} 
          error={errors.height?.message} 
          placeholder="e.g. 5'8&quot;" 
        />

        <Input 
          label="City / State" 
          {...register('city')} 
          error={errors.city?.message} 
          placeholder="e.g. Bengaluru, Karnataka" 
        />
      </div>
    </div>
  );
}
