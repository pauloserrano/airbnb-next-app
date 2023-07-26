"use client"

import { useMemo, useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/hooks/useRentModal'
import Heading from '../Heading'
import { categories } from '../navbar/Categories'
import CategoryInput from '../CategoryInput'
import { FieldValues, useForm } from 'react-hook-form'

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

export default function RentModal() {
  const rentModal = useRentModal()
  const [step, setStep] = useState(STEPS.CATEGORY)

  const onNextStep = () => setStep(step => step++)
  const onPreviousStep = () => setStep(step => step--)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: ""
    }
  })

  const currentCategory = watch("category")

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create"
    }

    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return "Back"
  }, [step])

  let bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading 
        title="Which of these best describe your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map(category => (
          <div key={category.label} className="col-span-1">
            <CategoryInput 
              icon={category.icon}
              label={category.label}
              onClick={(input) => setCustomValue("category", input)}
              selected={currentCategory === category.label}
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Modal 
      title='Airbnb your home!'
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onPreviousStep}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={() => {}}
      body={bodyContent}
    />
  )
}
